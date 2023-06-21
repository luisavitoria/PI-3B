import React, { useReducer, ReactNode } from 'react';
import { setDoc, getDoc, doc, addDoc, getFirestore, collection } from '@firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


const defaultValue = {
    id: null,
    isLogged: false,
    userName: null,
    email: null,
    isLoading: true,
    errorMessage: null
}

const Context = React.createContext(defaultValue)

const Provider = ({ children }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'login':
                return {
                    ...state,
                    ...action.payload,
                    errorMessage: null
                }
            case 'user_created':
                return { ...state, errorMessage: null }
            case 'logout':
                return { id: null, isLogged: false, userName: null, errorMessage: null }
            case "add_error":
                return { ...state, errorMessage: action.payload }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, defaultValue)

    const signUp = async ({ email, password, name }) => {
        try {
            const auth = getAuth();
            const response = await createUserWithEmailAndPassword(auth, email, password)

            const db = getFirestore()
            await setDoc(doc(db, 'users', response.user.uid), {
                name,
                email,
            })
            await addDoc(collection(db, 'account'), {
                id: response.user.uid,
                total: 0,
                gastos: 0,
                renda: 0
            })

            alert('Usuário cadastrado com sucesso!')
            dispatch({
                type: 'user_created',
            })
        } catch (err) {
            console.error(err)
            dispatch({
                type: 'add_error',
                payload: 'Houve algum erro no cadastro...'
            })
        }
    }

    const login = async ({ email, password }) => {
        try {
            const auth = getAuth();
            const response = await signInWithEmailAndPassword(auth, email, password)

            const uid = response.user.uid
            const db = getFirestore()

            const user = await getDoc(doc(db, 'users', uid))

            const { name } = user.data()

            dispatch({
                type: 'login',
                payload: { id: uid, isLogged: true, userName: name, email: user.data().email }
            })
        } catch (err) {
            console.error(err)
            dispatch({
                type: 'add_error',
                payload: 'Houve algum erro no login...'
            })
        }
    }

    const tryLocalLogin = async () => {
        let isLogged = false

        try {
            const auth = getAuth();
            await onAuthStateChanged(auth, user => {
                if (user != null) {
                    isLogged = true
                }
            });

            dispatch({ type: 'login', payload: { isLogged } })

        } catch (err) {
            console.error(err)
        }
    }

    const logout = async () => {
        try {
            const auth = getAuth()
            await auth.signOut()

            dispatch({
                type: 'logout',
            })
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <Context.Provider
            value={{
                ...state,
                login,
                signUp,
                tryLocalLogin,
                logout
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { Provider, Context }
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ArrowsClockwise } from 'phosphor-react-native'
import { Context as AuthContext } from '../../context/AuthContext';
import logo from '../../assets/logo.jpg'
import { styles } from './styles';
import ResumoCard from '../../components/ResumoCard';
import RendaCard from '../../components/RendaCard';
import GastosCard from '../../components/GastosCard';
import Header from '../../components/Header';
import { getFirestore, collection, query, where, getDocs } from '@firebase/firestore';


export default Home = ({ userName, navigation }) => {
    const { id } = useContext(AuthContext)

    const [total, setTotal] = useState('')
    const [renda, setRenda] = useState('')
    const [gastos, setGastos] = useState('')
    const [listRenda, setListRenda] = useState([])
    const [listGastos, setListGastos] = useState([])

    const getResumeValues = async () => {
        try {
            const db = getFirestore()

            const q = query(collection(db, "account"), where("id", "==", id));
            const res = await getDocs(q)

            res.forEach(item => {
                setTotal(item.data().total)
                setRenda(item.data().renda)
                setGastos(item.data().gastos)
            })
        } catch (error) {
            console.error(error)
        }
    }

    const getRendaValues = async () => {
        try {
            const db = getFirestore()

            const q = query(collection(db, "operations"), where("type", "==", "Renda"), where("id", "==", id));
            const res = await getDocs(q)

            const arr = []
            res.forEach(item => {
                arr.push(item.data())
            })
            setListRenda(arr)
        } catch (error) {
            console.error(error)
        }
    }

    const getGastosValues = async () => {
        try {
            const db = getFirestore()

            const q = query(collection(db, "operations"), where("type", "==", "Despesa"), where("id", "==", id));
            const res = await getDocs(q)

            const arr = []
            res.forEach(item => {
                arr.push(item.data())
            })
            setListGastos(arr)
        } catch (error) {
            console.error(error)
        }
    }

    function handleRefresh() {
        getResumeValues()
        getRendaValues()
        getGastosValues()
    }

    useEffect(() => {
        getResumeValues()
        getRendaValues()
        getGastosValues()
    }, [])

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                {userName && <Header userName={userName} />}

                <TouchableOpacity onPress={handleRefresh}>
                    <ArrowsClockwise weight='thin' size={32} />
                </TouchableOpacity>
            </View>

            <ResumoCard total={total} renda={renda} gastos={gastos} />

            {listRenda && <RendaCard list={listRenda} navigation={navigation} />}

            {listGastos && <GastosCard list={listGastos} navigation={navigation} />}

        </View>
    )
}
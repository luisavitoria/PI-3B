
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import { User, Lock, IdentificationCard, Student, Envelope } from 'phosphor-react-native'
import { Context as AuthContext } from '../../context/AuthContext';
import { Formik } from 'formik'
import * as yup from 'yup'
import { THEME } from '../../theme';
import HeaderLogo from '../../components/HeaderLogo';
import { Input } from '../../components/Input';
import Button from '../../components/Button';
import { styles } from './styles';

const SignUp = ({ navigation }) => {

   const { signUp, errorMessage } = useContext(AuthContext)

    const signUpValidationSchema = yup.object().shape({
        name: yup
            .string()
            .required('Nome completo é um campo obrigatório'),
        email: yup
            .string()
            .email('E-mail inválido')
            .required('E-mail é um campo obrigatório'),
        password: yup
            .string()
            .min(6, ({ min }) => `A senha deve ter ao menos ${min} caracteres`)
            .required('Senha é um campo obrigatório'),
    })

    return (
        <>
            <KeyboardAvoidingView style={styles.container} contentContainerStyle={styles.containerPosition} behavior={Platform.OS === 'ios' ? "padding" : "position"}>
                <View>
                    <HeaderLogo />

                    <Formik
                        validationSchema={signUpValidationSchema}
                        initialValues={{ name: '', email: '', password: '' }}
                        onSubmit={(values) => {
                            signUp && signUp(values)
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                            <>
                                <View>
                                    <Text>Nome completo</Text>

                                    <Input.Container>
                                        <Input.Icon>
                                            <User color='#000' />
                                        </Input.Icon>
                                        <Input.Input
                                            placeholder='Luísa Anjos'
                                            placeholderTextColor={THEME.COLORS.INPUT}
                                            autoCapitalize='none'
                                            autoCorrect
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            value={values.name}
                                        />
                                    </Input.Container>

                                    {errors.name &&
                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
                                    }
                                </View>

                                <View>
                                    <Text>E-mail</Text>

                                    <Input.Container>
                                        <Input.Icon>
                                            <Envelope color='#000' />
                                        </Input.Icon>
                                        <Input.Input
                                            placeholder='user@cesmac.edu.br'
                                            placeholderTextColor={THEME.COLORS.INPUT}
                                            autoCapitalize='none'
                                            autoCorrect
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        />
                                    </Input.Container>

                                    {errors.email &&
                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                                    }
                                </View>


                                <View>
                                    <Text>Senha</Text>

                                    <Input.Container>
                                        <Input.Icon>
                                            <Lock color='#000' />
                                        </Input.Icon>
                                        <Input.Input
                                            placeholder='******'
                                            placeholderTextColor={THEME.COLORS.INPUT}
                                            autoCapitalize='none'
                                            autoCorrect
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                        />
                                    </Input.Container>

                                    {errors.password &&
                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                                    }

                                </View>

                                <Button title='Cadastrar' onPress={() => handleSubmit()} disabled={!isValid} />
                            </>
                        )}
                    </Formik>


                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}>Já possui conta? Entre agora!</Text>
            </TouchableOpacity>
            {errorMessage && <Text style={{ textAlign: 'center', marginTop: 18, color: "red" }}>{errorMessage}</Text>}

        </>
    )
}

export default SignUp;
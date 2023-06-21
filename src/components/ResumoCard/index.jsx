
import React from 'react';
import { View, Text, Image, } from 'react-native';
import logo from '../../assets/logo.jpg'
import { styles } from './styles';
import { THEME } from '../../theme';

const ResumoCard = ({ total, renda, gastos }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resumo</Text>
            <View style={styles.container_card}>
                <View style={styles.card}>
                    <Text style={{ color: 'gray' }}>Saldo</Text>
                    <Text>R$ {total}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={{ color: THEME.COLORS.PRIMARYDARK }}>Renda</Text>
                    <Text>R$ {renda}</Text>
                </View>

                <View style={styles.card}>
                    <Text style={{ color: 'red' }}>Despesas</Text>
                    <Text>R$ {gastos}</Text>
                </View>
            </View>
        </View>

    )
}

export default ResumoCard
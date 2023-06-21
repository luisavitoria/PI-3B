
import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../assets/logo.jpg'
import { styles } from './styles';


const Header = ({ userName }) => {
    return (
        <View>
            <Text style={styles.header}>Olá, {userName}!</Text>
        </View>
    )
}

export default Header;
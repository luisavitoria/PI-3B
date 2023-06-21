
import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../assets/logo.jpg'
import { styles } from './styles';


const HeaderLogo = () => {
    return (
        <View style={styles.container}>
            <Image style={{width: 180, height: 120}} source={logo}></Image>

            <Text style={styles.header}>Cesmac Financial</Text>
        </View>
    )
}

export default HeaderLogo;
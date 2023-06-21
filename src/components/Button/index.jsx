
import React, { ReactNode } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Button = (props) => {
    return (
        <TouchableOpacity {...props} style={styles.touchable}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;
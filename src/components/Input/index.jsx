
import React, { ReactNode} from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';


const TextInputContainer = ({ children }) => {
    return ( 
        <View style={styles.container}>
            {children}
        </View>
    )
}


const TextInputInput = (props) => {
    return (
        <TextInput style={styles.input} {...props}></TextInput>
    )
}

const TextInputIcon = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export const Input = {
    Container: TextInputContainer,
    Input: TextInputInput,
    Icon: TextInputIcon
}
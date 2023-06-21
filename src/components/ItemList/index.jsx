
import React, { ReactNode } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const ItemList = ({ item }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {item.category}
            </Text>
            <Text style={styles.text}>
                Valor: R${item.value}
            </Text>
            <Text style={styles.text}>
                Data: {item.date}
            </Text>
            {item.note &&
                <Text style={styles.note}>
                    Notas: {item.note}
                </Text>
            }

        </View>
    )
}

export default ItemList;
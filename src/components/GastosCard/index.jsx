
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { PlusCircle } from 'phosphor-react-native'
import { styles } from './styles';
import { THEME } from '../../theme';
import { getFirestore, collection, query, where, getDocs } from '@firebase/firestore';
import ItemList from '../ItemList';
import { Context as AuthContext } from '../../context/AuthContext';

const GastosCard = ({ navigation, list }) => {

    function handlePlusPress() {
        navigation.navigate("NewOperation", { value: 'Despesa' })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gastos</Text>

            {list && list.length === 0 ?
                <View style={styles.container_card}>
                    <TouchableOpacity style={styles.container_card} onPress={handlePlusPress}>
                        <PlusCircle size={32} color={THEME.COLORS.ERROR} />
                        <View style={{ paddingLeft: 4 }}>
                            <Text>Você não tem nenhum gasto.</Text>
                            <Text>Adicione um novo gasto...</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.container_card}>
                    <View style={{ flex: 1}}>
                        <FlatList
                            data={list}
                            keyExtractor={(item, index) => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.card}>
                                        <ItemList item={item}></ItemList>
                                    </View>
                                )

                            }}
                        />
                    </View>
                </View>
            }
        </View>

    )
}

export default GastosCard
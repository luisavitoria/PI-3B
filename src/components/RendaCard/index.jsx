
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { PlusCircle } from 'phosphor-react-native'
import logo from '../../assets/logo.jpg'
import { styles } from './styles';
import { THEME } from '../../theme';
import { getFirestore, collection, query, where, getDocs } from '@firebase/firestore';
import ItemList from '../ItemList';
import { Context as AuthContext } from '../../context/AuthContext';

const RendaCard = ({ navigation, list }) => {

    function handlePlusPress() {
        navigation.navigate("NewOperation", { value: 'Renda' })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Renda</Text>

            {list && list.length === 0 ?
                <View style={styles.container_card}>
                    <TouchableOpacity style={styles.container_card} onPress={handlePlusPress}>
                        <PlusCircle size={32} color={THEME.COLORS.PRIMARY} />
                        <View style={{ paddingLeft: 4 }}>
                            <Text>Você não tem nenhuma renda.</Text>
                            <Text>Adicione uma nova renda...</Text>
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

export default RendaCard
import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { UserCircle } from 'phosphor-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import { styles } from './styles';

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { updateDoc, Timestamp, addDoc, getDoc, doc, getFirestore, getDocs, collection, query } from '@firebase/firestore';


const Profile = ({ navigation }) => {

    const { userName, email, logout } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <View style={styles.container_text}>
                    <Text style={styles.text_header}>Usuário:</Text>
                    <Text style={styles.text}>{userName}</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_header}>E-mail:</Text>
                    <Text style={styles.text}>{email}</Text>
                </View>
                <Button title='Sair' onPress={logout} />
            </View>
        </View>
    )
}

export default Profile;
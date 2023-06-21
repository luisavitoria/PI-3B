import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { styles } from './styles';
import Button from '../../components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Context as AuthContext } from '../../context/AuthContext';
import { Timestamp, addDoc, getDoc, updateDoc, doc, getFirestore, collection, query, where, getDocs } from '@firebase/firestore';


export default NewOperation = ({ route, navigation }) => {
    const { userName, id, tryLocalLogin } = useContext(AuthContext)

    const { value } = route.params
    const options = ['Despesa', 'Renda']
    const categories = ['Salário', 'Mercearia', 'Gás', 'Aluguel', 'Esportes', 'Restaurante', 'Férias', 'Viagens', 'Presente', 'Internet', 'Entretenimento', 'Outros']

    const [category, setCategory] = useState('')
    const [operation, setOperation] = useState(value)
    const [valueOperation, setValueOperation] = useState('')
    const [note, setNote] = useState('');
    const [date, setDate] = useState(new Date());

    const [isPickerShow, setIsPickerShow] = useState(false);

    const handleCancel = () => {
        navigation.navigate('MainNavigator', { screen: 'Home' })
    }

    const handleSave = async () => {
        try {
            const payload = {
                id: id,
                value: Number(valueOperation),
                type: operation,
                date: date.toLocaleDateString(),
                note: note,
                category: category,
                created: Timestamp.now()
            }

            const db = getFirestore()
            const res = await addDoc(collection(db, 'operations'), payload)

            alert('Transação realizada com sucesso!')

            if (operation === 'Despesa') {
                updateTotal(-Number(valueOperation))
            } else {
                updateTotal(Number(valueOperation))
            }
        } catch (error) {
            console.error(error)
        }
    }

    const updateTotal = async (value) => {
        try {
            let actualValue;
            let accountId;
            let gastos;
            let renda;
            const db = getFirestore()

            const q = query(collection(db, "account"), where("id", "==", id));
            const res = await getDocs(q)

            res.forEach(item => {
                actualValue = item.data().total
                gastos = item.data().gastos
                renda = item.data().renda
                accountId = item.id
            })

            const newTotal = actualValue + value

            if (value > 0) {
                renda = renda + value
            } else {
                gastos = gastos - value
            }

            await updateDoc(doc(db, "account", accountId), {
                total: newTotal,
                gastos,
                renda
            })

        } catch (error) {
            console.error(error)
        }
    }


    const showPicker = () => {
        setIsPickerShow(!isPickerShow);
    };

    const onChange = (event, value) => {
        setDate(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
        setIsPickerShow(false);
    };

    useEffect(() => {
        tryLocalLogin && tryLocalLogin()
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Nova Transação</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.inputValue}>R$ </Text>
                <TextInput style={styles.inputValue} placeholder='0,00' value={valueOperation} onChangeText={setValueOperation} keyboardType="numeric" />
            </View>

            <View style={styles.category_container}>
                <Text>Tipo</Text>
            </View>

            <View>
                <SelectDropdown
                    data={options}
                    onSelect={(selectedItem, index) => {
                        setOperation(selectedItem)
                    }}

                    defaultButtonText={value ? value : 'Selecione a transação'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                    buttonStyle={styles.category_container}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.category_container}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                />

            </View>

            <View style={styles.category_container}>
                <Text>Categoria</Text>
            </View>

            <View>
                <SelectDropdown
                    data={categories}
                    onSelect={(selectedItem, index) => {
                        setCategory(selectedItem)
                    }}

                    defaultButtonText={'Selecione a categoria'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item;
                    }}
                    buttonStyle={styles.category_container}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.category_container}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                />
            </View>

            <TouchableOpacity style={styles.category_container} onPress={showPicker}  >
                <Text>Data</Text>
                <Text>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>

            {isPickerShow && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onChange}
                    style={styles.datePicker}
                    locale='pt-BR'
                />
            )}

            <TextInput placeholder='Notas' style={styles.category_container} value={note} onChangeText={setNote} />

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
                    <Text style={styles.textButton}>Cancelar</Text>
                </TouchableOpacity>

                <Button onPress={handleSave} title="Salvar"></Button>
            </View>
        </View>
    )
}
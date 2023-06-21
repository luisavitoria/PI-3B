import { StyleSheet } from "react-native";
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        marginTop: 50,
        padding: 10
    },
    title: {
        fontWeight: '700',
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 10
    },
    inputValue: {
        fontSize: 32,
    },
    category_container: {
        width: '100%',
        fontSize: THEME.FONT_SIZE.MD,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomColor: THEME.COLORS.BACKGROUNDBORDER,
        borderBottomWidth: 1
    },
    dropdown1BtnStyle: {
        marginTop: 2,
        width: '100%',
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown1BtnTxtStyle: {
        color: '#444',
        textAlign: 'left'
    },
    dropdown1DropdownStyle: {
        backgroundColor: '#EFEFEF'
    },
    dropdown1RowStyle: {
        backgroundColor: '#EFEFEF',
        borderBottomColor: '#C5C5C5'
    },
    dropdown1RowTxtStyle: {
        color: '#444',
        textAlign: 'left'
    },
    buttonCancel: {
        minWidth: 280,
        padding: 15,
        borderColor: THEME.COLORS.BACKGROUNDBORDER,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 12,
        marginVertical: 10
    },
    textButton: {
        color: THEME.COLORS.TEXTSECONDARY,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'column',
        width: '100%',
        marginTop: 25,
    },
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

})
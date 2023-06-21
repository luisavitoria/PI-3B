import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        color: THEME.COLORS.TEXTSECONDARY,
        marginTop: 60,
        
    }, 
    containerPosition: {
        alignItems: "center",
        marginTop: 50
    },
    header: {
        color: THEME.COLORS.BLACK,
        fontSize: THEME.FONT_SIZE.LG,
        fontWeight: '700',
        marginBottom: 20
    },
    link: {
        color: THEME.COLORS.TEXTSECONDARY,
        fontSize: THEME.FONT_SIZE.SM,
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginTop: 10
    },
    errorMessage: {
        color: THEME.COLORS.ERROR,
        textAlign: 'center'
    }
})
import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    touchable: {
        minWidth: 280,
        padding: 15,
        backgroundColor: THEME.COLORS.PRIMARYLIGHT,
        alignItems: 'center',
        borderRadius: 12,
        marginVertical: 10
    },
    text: {
        color: THEME.COLORS.TEXTPRIMARY,
        textAlign: 'center'
    }
})
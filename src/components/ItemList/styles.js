import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
    container: {
    },
    title: {
        color: THEME.COLORS.TEXTSECONDARY,
        textAlign: 'left',
        fontWeight: '700',
        marginBottom: 2
    },
    text: {
        color: THEME.COLORS.TEXTSECONDARY,
        textAlign: 'left',
        marginBottom: 1,
    },
    note: {
        color: THEME.COLORS.TEXTSECONDARY,
        textAlign: 'left',
        fontSize: 13
    }
})
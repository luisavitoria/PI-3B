import { StyleSheet } from "react-native";
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '100%',
        minWidth: 280,
        marginBottom: 6,
        borderRadius: 12,
        backgroundColor: THEME.COLORS.PRIMARY,
        padding: 10,
        color: THEME.COLORS.TEXTPRIMARY,
    },
    input: {
        marginStart: 12,
        flex: 1,
        color: THEME.COLORS.TEXTSECONDARY,
    }
})
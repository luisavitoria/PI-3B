import { StyleSheet } from "react-native";
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'start',
        maxWidth: '100%',
        marginBottom: 6,
        borderRadius: 5,
        backgroundColor: THEME.COLORS.BACKGROUND,
        padding: 6,
        color: THEME.COLORS.TEXTPRIMARY,
        marginTop: 20,
        borderColor: THEME.COLORS.BACKGROUNDBORDER,
        borderWidth: 2
    },
    container_card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        overflow: 'scroll',
        fontSize: THEME.FONT_SIZE.SM,

    },
    card: {
        width: '100%',
        flexDirection: 'column',
        flex: 1,
        borderRadius: 12,
        borderColor: 'red',
        borderWidth: 1,
        minWidth: 280,
        padding: 10,
        alignItems: 'start',
        marginVertical: 10
    },
    title: {
        fontWeight: '700',
        fontSize: THEME.FONT_SIZE.MD,
        marginBottom: 3
    }

})
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
        marginTop: 2,
        borderColor: THEME.COLORS.BACKGROUNDBORDER,
        borderWidth: 2
    },
    container_card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        
    },
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        // borderWidth: 1,
        flex: 1
    },
    title: {
        fontWeight: '700',
        fontSize: THEME.FONT_SIZE.MD,
        marginBottom: 3
    }
   
})
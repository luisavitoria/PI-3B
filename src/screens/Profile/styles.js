import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.PRIMARY,
        padding: 15,
        paddingBottom: 20,
        borderRadius: 25
    },
    name: {
        fontSize: THEME.FONT_SIZE.LG,
        fontWeight: '700',
        color: THEME.COLORS.TEXTPRIMARY,
        marginBottom: 20,
    },
    container_text: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    text_header: {
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXTPRIMARY,
        fontWeight: '700'
    },
    text: {
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXTPRIMARY,
        marginBottom: 5,
        marginLeft: 8
    },
    buttonStyle: {
        width: '100%',
        backgroundColor: THEME.COLORS.PRIMARYDARK,
        color: THEME.COLORS.TEXTPRIMARY,
        height: 40,
        borderRadius: 30,
        marginVertical: 15,
        paddingHorizontal: 10
    },
    buttonTextStyle: {
        color: THEME.COLORS.TEXTPRIMARY,
        paddingVertical: 10,
        fontSize: 16,
    },
})
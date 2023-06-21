import { StyleSheet, TextStyle, ViewStyle} from 'react-native'
import { THEME } from '../../theme'
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    header: {
        color: THEME.COLORS.BLACK,
        fontSize: THEME.FONT_SIZE.LG,
        fontWeight: '700',
        marginBottom: 25
    },
    container: {
        flexDirection: "column",
        alignItems: 'center'
    }
})
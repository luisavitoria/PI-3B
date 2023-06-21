import { StyleSheet, TextStyle, ViewStyle} from 'react-native'
import { THEME } from '../../theme'
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    header: {
        color: THEME.COLORS.BLACK,
        fontSize: THEME.FONT_SIZE.SM,
        fontWeight: '700',
        marginBottom: 25
    },
})
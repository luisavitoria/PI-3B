import { StyleSheet } from "react-native";
import { THEME } from '../../theme'
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'start',
        maxWidth: '100%',
        padding: 10,
        flex: 1
    },
    header: {
        marginTop: Constants.statusBarHeight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
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
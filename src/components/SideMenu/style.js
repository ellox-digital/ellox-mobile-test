import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    titleContainer: {
        width: '100%',
        height: 40,
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 15,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#1DA1F2',
        marginTop: 10,
        marginBottom: 10,
    },
    userInfo: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 15,
        color: '#1DA1F2',
        paddingBottom: 15
    }
})

export default styles
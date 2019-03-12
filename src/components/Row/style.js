import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center', 
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    item: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1DA1F2'
    },
    body: {
        fontSize: 16,
        paddingLeft: 10,
        color: '#657786'
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: '#1DA1F2',
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 10,
    }
})

export default styles
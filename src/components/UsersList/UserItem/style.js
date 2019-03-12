import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    avatarContainer: {
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#1DA1F2',
        borderRadius: 30,
    },
    infosContainer: {
        flex: 1,
        paddingLeft: 20,
    },
    userName: {
        fontSize: 18,
        color: '#1DA1F2',
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 16,
        marginTop: 5,
        color: '#657786'
    },
    button: {
        marginTop: 10,
        backgroundColor: '#1DA1F2',
        height: 30,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
})

export default styles
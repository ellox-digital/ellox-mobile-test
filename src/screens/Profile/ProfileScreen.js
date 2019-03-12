import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import Avatar from '../../components/Avatar/Avatar'
import Row from '../../components/Row/Row'
import styles from './style'


class ProfileScreen extends Component {

    static navigationOptions = {
        title: 'Perfil',
    };

    render() {
        const user = this.props.user
        return(
            <ScrollView style={styles.container}>
                <Avatar />
                <Row item='Nome' body={user.name}  />
                <Row item='Username' body={user.username}  />
                <Row item='Email' body={user.email}  />
                <Row item='Endereço' body='' />
                <Row item='Rua' body={user.address.street} doted={true} />
                <Row item='Complemento' body={user.address.suite} doted={true} />
                <Row item='Cidade' body={user.address.city} doted={true} />
                <Row item='CEP' body={user.address.zipcode} doted={true} />
                <Row item='Telefone' body={user.phone} />
                <Row item='Website' body={user.website} />
                <Row item='Empresa' body='' />
                <Row item='Nome' body={user.company.name} doted={true} />
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.user.infos}
}
export default connect(mapStateToProps)(ProfileScreen)
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Spinner } from 'native-base';
import { getUsersList } from '../../config/api'
import UsersList from '../../components/UsersList/UsersList'
import styles from './style'

class MainScreen extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);

        this.state = {
            usersList: [],
            fetched: false,
        }
    }

    componentDidMount() {
        getUsersList()
            .then(resp => this.setState({
                usersList: resp.data,
                fetched: true,
            }))
    }    

    render() {
        const state = this.state
        return(
            <View style={styles.container}>
                {this.state.fetched ? <UsersList list={state.usersList} /> : <Spinner color='#1DA1F2' />}
            </View>
        )
    }
}

export default MainScreen
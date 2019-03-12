import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity  } from 'react-native'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserInfos, getUserPosts } from '../../PostList/userActions'
import styles from './style'

const defaultImage = require('../../../../assets/images/default_user.png')

class UserItem extends Component {
    
    fetchAndNavigate = (id) => {
        this.props.getUserInfos(id)
        this.props.getUserPosts(id)
        this.props.navigation.navigate('Posts')
    }

    render() {
        return ( 
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image 
                        source={defaultImage} 
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.infosContainer}>
                    <Text style={styles.userName}>{this.props.name}</Text>
                    <Text style={styles.userEmail}>{this.props.email}</Text>
                    <TouchableOpacity 
                        onPress={() => this.fetchAndNavigate(this.props.id)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Visualizar Posts</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.user}
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ getUserInfos, getUserPosts }, dispatch)

export default withNavigation(connect(
    mapStateToProps, 
    mapDispatchToProps
)(UserItem))
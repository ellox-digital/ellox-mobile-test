import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';
import PostItem from './PostItem/PostItem'
import Avatar from '../Avatar/Avatar'
import styles from './style'

class PostList extends Component {

    static navigationOptions = {
        title: 'Posts',
    };

    render() {
        const { navigation } = this.props;
        return(
            <View style={styles.container}>
                <Avatar 
                    handlePress={() => navigation.navigate('Perfil')}
                    image='default'
                />
                <Text>{this.props.navigation.getParam('userId')}</Text>
                <FlatList
                    data={this.props.user.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <PostItem key={item.id} {...item} />}
                    ItemSeparatorComponent={() => <View style={styles.separator} />} 
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.user}
}
export default withNavigation(connect(mapStateToProps)(PostList))
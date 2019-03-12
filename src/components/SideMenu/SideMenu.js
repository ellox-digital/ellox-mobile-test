import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import Avatar from '../Avatar/Avatar'
import styles from './style';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  current = (key) => {
      if(key === this.props.activeItemKey) {
          return {
              color: '#1DA1F2',
          }
      } else {
          return {
              color: '#657786'
          }
      }
  }

  render () {
    const user = this.props.user
    return (
      <View style={styles.container}>
        <ScrollView>
            <Avatar />
            <TouchableOpacity style={styles.titleContainer} onPress={this.navigateToScreen('Home')}>
              <Text style={[this.current('Home'), styles.text]}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleContainer} onPress={this.navigateToScreen('Posts')}>
              <Text style={[this.current('Posts'), styles.text]}>
                Posts
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleContainer} onPress={this.navigateToScreen('Perfil')}>
              <Text style={[this.current('Perfil'), styles.text]}>
                Perfil
              </Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
            <Text style={styles.userInfo}>{user.username}</Text>
            <Text style={styles.userInfo}>{user.name}</Text>
            <Text style={styles.userInfo}>{user.email}</Text>
            <Text style={styles.userInfo}>{user.website}</Text>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {user: state.user.infos}
}

export default connect(mapStateToProps)(SideMenu);
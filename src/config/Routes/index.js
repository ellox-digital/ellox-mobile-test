import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import MainScreen from '../../screens/Main/MainScreen';
import PostList from '../../components/PostList/PostList'
import ProfileScreen from '../../screens/Profile/ProfileScreen'
import CommentsScreen from '../../screens/Comments/CommentsScreen'
import SideMenu from '../../components/SideMenu/SideMenu'

const menuIcon = require('../../../assets/images/menu.png')

const MenuButton = props => (
	<View>
		<TouchableOpacity onPress={() => props.navigation.toggleDrawer() }>
            <Image source={menuIcon} style={{height: 35, width: 35, marginLeft: 10}}/>
		</TouchableOpacity>
	</View>
);

const Stack = createStackNavigator(
    {
        Home: { screen: MainScreen },
        Comments: { screen: CommentsScreen }
    },
    {
        initialRouteName: 'Home'
    }
)

const PostStack = createStackNavigator(
    {
        PostsScreen: { screen: PostList, 
            navigationOptions: ({navigation}) => ({
                headerLeft: <MenuButton navigation={navigation} />
            }) 
        },
    },
    {
        initialRouteName: 'PostsScreen'
    }
)

const ProfileStack = createStackNavigator(
    {
        ProfileScreen: { screen: ProfileScreen, 
            navigationOptions: ({navigation}) => ({
                headerLeft: <MenuButton navigation={navigation} />
            }) 
        },
    },
    {
        initialRouteName: 'ProfileScreen'
    }
)

const Routes = createDrawerNavigator({
    Home: { title: 'Home', screen: Stack,  navigationOptions: { drawerLockMode: 'locked-closed' } },
    Posts: { title: 'Posts', screen: PostStack },
    Perfil: { title: 'Perfil', screen: ProfileStack }
},{
    contentComponent: SideMenu,
    drawerWidth: 200,
})

export default Routes
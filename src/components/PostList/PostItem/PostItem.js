import { withNavigation } from 'react-navigation';

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

const PostItem = props => ( 
    <TouchableOpacity 
        style={styles.container}
        onPress={() => props.navigation.navigate('Comments', {postId: props.id})}
    >
        <Text style={styles.postTitle}>{props.title}</Text>
        <Text style={styles.postBody}>{props.body}</Text>
    </TouchableOpacity>
)

export default withNavigation(PostItem)
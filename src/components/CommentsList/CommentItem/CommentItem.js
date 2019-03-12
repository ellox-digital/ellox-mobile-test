import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

export default props => ( 
    <View style={styles.container}>
        <Text style={styles.postTitle}>{props.title}</Text>
        <Text style={styles.postBody}>{props.body}</Text>
    </View>
)
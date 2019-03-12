import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

export default props => (
    <View style={styles.container}>
        {props.doted && <View style={styles.dot}></View>} 
        <Text style={styles.item}>{`${props.item}:`}</Text>
        <Text style={styles.body}>{props.body}</Text>
    </View>
)
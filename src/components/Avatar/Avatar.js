import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import styles from './style'

const defaultImage = require('../../../assets/images/default_user.png')

export default props => ( 
    <TouchableOpacity 
        onPress={props.handlePress}
        style={styles.container}
    >
        <Image 
            source={defaultImage} 
            style={styles.avatar}
        />
    </TouchableOpacity>
)
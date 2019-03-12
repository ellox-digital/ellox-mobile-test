import React from 'react'
import { View, FlatList  } from 'react-native'
import UserItem from './UserItem/UserItem'
import styles from './style'

export default props => ( 
    <View style={styles.container}>
        <FlatList
            data={props.list}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) =>
                <UserItem key={item.id} {...item} />}
            ItemSeparatorComponent={() => <View style={styles.separator} />} 
        />
    </View>
)
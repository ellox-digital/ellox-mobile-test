import React from 'react'
import { View, FlatList  } from 'react-native'
import CommentItem from './CommentItem/CommentItem'
import styles from './style'

export default props => ( 
    <View style={styles.container}>
        <FlatList
            data={props.list}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) =>
                <CommentItem key={item.id} {...item} />}
            ItemSeparatorComponent={() => <View style={styles.separator} />} 
        />
    </View>
)
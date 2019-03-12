import React, { Component } from 'react'
import { View } from 'react-native'
import { getPostComments } from '../../config/api'
import CommentsList from '../../components/CommentsList/CommentsList'
import styles from './style'

class CommentsScreen extends Component {

    static navigationOptions = {
        title: 'Comentários',
    };

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        getPostComments(this.props.navigation.getParam('postId'))
            .then(resp => this.setState({
                comments: resp.data
            }))
    }

    render() {
        const state = this.state
        return(
            <View style={styles.container}>
                <CommentsList list={state.comments} />
            </View>
        )
    }
}

export default CommentsScreen
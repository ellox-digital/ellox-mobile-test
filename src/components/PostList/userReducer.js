const INITIAL_STATE = { posts: {}, infos: {}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_FETCHED':
            return { ...state, infos: action.payload.data }
        case 'POSTS_FETCHED':
            return { ...state, posts: action.payload.data }
        default:
            return state
    }
}
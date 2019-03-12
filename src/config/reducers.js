import { combineReducers } from 'redux'
import userReducer from '../components/PostList/userReducer'

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer
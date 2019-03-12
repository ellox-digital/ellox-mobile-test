import axios from 'axios'
const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getUserInfos = id => {
    const request = axios.get(`${BASE_URL}/users/${id}`)
    return {
        type: 'USER_FETCHED',
        payload: request
    }
}

export const getUserPosts = id => {
    const request = axios.get(`${BASE_URL}/posts?userId=${id}`)
    return {
        type: 'POSTS_FETCHED',
        payload: request
    }
}
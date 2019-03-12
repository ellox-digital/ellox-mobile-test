import axios from 'axios'
const BASE_URL = 'https://jsonplaceholder.typicode.com'

export function getUsersList() {
    return axios.get(`${BASE_URL}/users`)
}

export function getPostComments(id) {
    return axios.get(`${BASE_URL}/comments?postId=${id}`)
}
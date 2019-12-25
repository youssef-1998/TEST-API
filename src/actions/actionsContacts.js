import { GETCONTACTS,GETPOSTS,GETCOMMENTS } from './actionstype';
import axios from "axios"

export const getallcontact = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
        dispatch({
            type: GETCONTACTS,
            payload: res.data
        })
    )
}

export const getposts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>
        dispatch({
            type: GETPOSTS,
            payload: res.data
        })
    )
}
export const getcomments = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res =>
        dispatch({
            type: GETCOMMENTS,
            payload: res.data
        })
    )
}
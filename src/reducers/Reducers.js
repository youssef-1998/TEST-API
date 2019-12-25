
import { GETCONTACTS, GETPOSTS, GETCOMMENTS } from "../actions/actionstype";



const Reducer = (state = [], action) => {
    switch (action.type) {
        case GETCONTACTS:
            return action.payload
        case GETPOSTS:
            return action.payload
        case GETCOMMENTS:
            return action.payload
        default:
            return state;
    }
}
export default Reducer;
import { LOGGED_IN } from "../actions/login";
import { LOGGED_OUT } from "../actions/logout";

const initialState = localStorage.getItem("token") || "";

export default function token(state = initialState, action) {
    switch(action.type){
        case LOGGED_IN:
            return action.payload;
        case LOGGED_OUT:
            return "";
        default:
            return state;
    }
}
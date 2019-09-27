
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {createStore} from "redux"

import {Provider} from "react-redux"
const ActorsReducer=(state=[{
    actorId:1,
    actorName:"a"
}],action) => {
    switch(action.type)
    {
        case "GETACTORS":
            state=
            action.payload
            console.log(state)
            break;
            case "SETACTOR":
            console.log(action.payload)
            break;
        default:
            break;
    }
    return state;
}

const store=createStore(
   ActorsReducer,[{actorId:1,
    actorName:"a"}]);
store.subscribe(() =>
{
    console.log("Store updated", store.getState());
})
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

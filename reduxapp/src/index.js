
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {createStore,combineReducers, applyMiddleware} from "redux"
import {createLogger} from "redux-logger"
import {Provider} from "react-redux"
const CalculationsReducer=(state={
    result:1,
    lastValues:[]
},action) => {
    switch(action.type)
    {
        case "ADD":
            state=
            {
                ...state,
                result:state.result+action.payload,
                lastValues:[
                    ...state.lastValues,action.payload
                ]
            };
            break;
        case "SUBTRACT":
            state=
            {
                ...state,
                result:state.result-action.payload,
                lastValues:[
                    ...state.lastValues,action.payload
                ]
            };
            break;
        default:
            break;
    }
    return state;
}

const AgeAndNameReducer=(state={
    name:"A",
    age:8,
    lastValues:[{name:"A",age:8}]

},action) => {
    switch(action.type)
    {
        case "SETNAME":
            state=
            {
                ...state,
                name:action.payload,
                lastValues:[...state.lastValues,{name:action.payload,age:state.age}]
            };
            break;
        case "SETAGE":
            state=
            {
                ...state,
                age:action.payload,
                lastValues:[...state.lastValues,{name:state.name,age:action.payload}]
            };
            break;
        default:
            break;
    }
    return state;
}
const myLogger=(store) => (next) => (action) =>
{
    console.log("My Logged action ",action);
    next(action);
};
const store=createStore(
    combineReducers(
        {CalculationsReducer,AgeAndNameReducer}),
{},
applyMiddleware(myLogger, createLogger()));
store.subscribe(() =>
{
    console.log("Store updated", store.getState());
})/*
store.dispatch(
    {
        type:"ADD",
        payload:100
    }
)
store.dispatch(
    {
        type:"SUBTRACT",
        payload:59
    }
)
store.dispatch(
    {
        type:"SUBTRACT",
        payload:10
    }
)
store.dispatch(
    {
        type:"SETNAME",
        payload:"B"
    }
)
store.dispatch(
    {
        type:"SETAGE",
        payload:10
    }
)*/
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
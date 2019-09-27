
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from "redux"
import {Provider} from "react-redux"
const initialState={
    list:[],
    value:""
};
const TodoReducer=(state=initialState,action) => {
    switch(action.type)
    {

        case "handleChange":
            state=
            {
                ...state,
                value:action.payload
            };

            console.log(action.payload);
            break;
        case "handleButton":
                if (state.value !== "")
                {
            state=
            {
                ...state,
                list: [...state.list, state.value]
            };}
            console.log(state)
            break;
            case "editTask":
                    let array = [...state.list]
                    let index = array.indexOf(action.payload);
                    let edited = prompt("Edit the task")
                    array[index] = edited
                    state=
                    {
                        ...state,
                        list: array
                    };
                    break;
                    case "deleteTask":
                                let array1 = [...state.list]
                                let index1 = array1.indexOf(action.payload);
                                array.splice(index1, 1);
                    state=
                    {
                        ...state,
                        list: array
                    };
                    break; 
        default:
            break;
    }
    return state;
}
const store=createStore(TodoReducer)
store.subscribe(()=>{
    console.log("Store updated", store.getState());
  });
ReactDOM.render(<Provider store={store}><App /></Provider>, window.document.getElementById('root'));



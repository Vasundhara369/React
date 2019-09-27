import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList'
import {createStore} from "redux"
import {Provider} from "react-redux"
const initialState={taskName: [], value: ""}
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
                taskName: [...state.taskName, state.value]
            };}
            console.log(state)
            break;
            case "editTask":
                    let array = [...state.taskName]
                    let index = array.indexOf(action.payload);
                    let edited = prompt("Edit the task")
                    array[index] = edited
                    state=
                    {
                        ...state,
                        taskName: array
                    };
                    break;
                    case "deleteTask":
                                let array1 = [...state.taskName]
                                let index1 = array1.indexOf(action.payload);
                                array.splice(index1, 1);
                    state=
                    {
                        ...state,
                        taskName: array
                    };
                    break; 
        default:
            break;
    }
    return state;
}
const store=createStore(TodoReducer,{
    taskName: [], value: ""
})

ReactDOM.render(<Provider store={store}><TaskList /></Provider>, document.getElementById('root'));
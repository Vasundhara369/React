/* eslint-disable no-console */
import React from 'react';
import {connect} from "react-redux";
import { TextField, Button, List, ListItem, ListItemText } from '@material-ui/core'
import { Print } from './Print';
class TaskList extends React.Component {
    
    render() {
      let p=()=>this.props.user.taskName.map(item => 
        <ListItem key={item} alignItems="flex-start">
            <ListItemText>{item}
                &emsp;<Button id={item} variant="contained" size="small" onClick={()=>this.props.edittask({item})}>EDIT</Button>
                &emsp;<Button id={item} variant="contained" size="small" onClick={()=>this.props.deletetask({item})}>DELETE</Button>
            </ListItemText>
        </ListItem>)
        return (<div><h1>TODO LIST</h1>
            <TextField
                id="name"
                label="Task"
                onChange={()=>this.props.handlechange()}
                margin="normal"
                variant="outlined"
            />
            <br></br>
            <Button id="add" variant="contained" color="primary" onClick={()=>this.props.handlebutton()}>
                ADD TASK
      </Button>
       
            <hr />
            <h1>YOUR TASKS</h1>
            <Print taskName={()=>this.props.user.taskName} edit={(i)=>this.props.edittask}
            delete={(i)=>this.props.deletetask}/>
        </div>)
    }

}

const mapStateToProps=(state) =>
{
  return {
    user:state.TodoReducer
  }
}
const mapDispatchToProps=(dispatch) =>
{
  return {
    handlechange: () =>
    {
      dispatch({
    type:"handleChange",
    payload:document.getElementById("name").value})
    },
    handlebutton: () =>
    {
      dispatch({
    type:"handleButton"})
    },
    edittask: (item) =>
    {
      dispatch({
    type:"editTask",
    payload:item})
    },
    deletetask: (item) =>
    {
      dispatch({
    type:"deleteTask",
    payload:item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);


/* eslint-disable no-console */
import React from 'react';
import {connect} from "react-redux";
import {Print} from "./Print"
import { TextField, Button, List, ListItem, ListItemText } from '@material-ui/core'
import { Textfield } from './Textfield';
class App extends React.Component {
    
    render() {
        return (<div><h1>TODO LIST</h1>
           <Textfield handleChange={()=>this.props.handleChange()}/>
            <br></br>
            <Button id="add" variant="contained" color="primary" onClick={()=>this.props.handleButton()}>
                ADD TASK
      </Button>
            
  <Print list={this.props.user.list}
    deleteTask={(a)=>{this.props.deleteTask(a)}}
    editTask={(a)=>{this.props.editTask(a)}}/>
         </div>  )
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
    handleChange: () =>
    {
      dispatch({
    type:"handleChange",
    payload:document.getElementById("name").value})
    },
    handleButton: () =>
    {
      dispatch({
    type:"handleButton"})
    },
    editTask: (item) =>
    {
      dispatch({
    type:"editTask",
    payload:item})
    },
    deleteTask: (item) =>
    {
      dispatch({
    type:"deleteTask",
    payload:item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

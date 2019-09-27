
import React from 'react';
import axios 
from 'axios'
import {connect} from "react-redux";
class App extends React.Component
{
  componentDidMount()
  {
    axios.get('http://localhost:8080/getActors').then(res=>this.props.getActors(res.data) );
    axios.post('http://localhost:8080/addActor',{
      "actorId": 110,
      "actorName": "Ryan Reynolds"
  }).then(res=>this.props.setActor(res.data));
  axios.get('http://localhost:8080/getActors').then(res=>this.props.getActors(res.data) );
  }
  render()
  {
      return (<div>
      </div>)
  }
}
const mapStateToProps=(state) =>
{
  return {
    act:state.ActorsReducer
  }
}
const mapDispatchToProps=(dispatch) =>
{
  return {
    getActors: (actors) =>
    {
      dispatch({
    type:"GETACTORS",
    payload:actors})
    },
    setActor: (actor) =>
    {
      dispatch({
    type:"SETACTOR",
    payload:actor})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
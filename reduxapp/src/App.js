import React from 'react';
import {Main} from "./Main";
import {User} from "./User";
import {connect} from "react-redux";
class App extends React.Component
{
  render()
  {
      return (<div className="container">
      <Main changeUserName={() => this.props.setName("Bob")}/>
      <User username={this.props.user.name}/>
      </div>)
  }
}
const mapStateToProps=(state) =>
{
  return {
    cal:state.CalculationsReducer,
    user:state.AgeAndNameReducer
  }
}
const mapDispatchToProps=(dispatch) =>
{
  return {
    setName: (name) =>
    {
      dispatch({
    type:"SETNAME",
    payload:name})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
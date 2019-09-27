import React from "react"
export class User extends React.Component
{
    render()
    {
        return (<div>
         <p>username:{this.props.username}</p>
        </div>)
    }
}
import React from "react"
export class Main extends React.Component
{
    render()
    {
        return (<div>
         <button onClick={() => this.props.changeUserName("A")}>Change</button>
        </div>)
    }
}
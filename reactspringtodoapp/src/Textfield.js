import React from 'react'
import { TextField} from '@material-ui/core'
export const Textfield=(props) =>
{
    return(
        <div><TextField
        id="name"
        label="Task"
        onChange={()=>props.handleChange()}
        margin="normal"
        variant="outlined"
    /></div>
    )
}
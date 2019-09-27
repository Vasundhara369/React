import React from 'react'
import { TextField, Button, List, ListItem, ListItemText } from '@material-ui/core'
export const Print=(props)=>
{
    return(
<List>

                {props.taskName.map(item => (
                    <ListItem key={item} alignItems="flex-start">
                        <ListItemText>{item}
                            &emsp;<Button id={item} variant="contained" size="small" onClick={()=>props.edittask({item})}>EDIT</Button>
                            &emsp;<Button id={item} variant="contained" size="small" onClick={()=>props.deletetask({item})}>DELETE</Button>
                        </ListItemText>
                    </ListItem>
                 ) )}<hr />
            </List>)
}
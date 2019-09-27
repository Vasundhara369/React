import React from 'react'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
export const Print=(props)=>
{
    return(
        <div>
            <List style={{margin: 20}}>
          {props.list.map(item => (
            <li 
            key={item}>{item} 
            <Button variant="outlined" style={{ margin: 1 }} color="primary" id={item} onClick={()=>props.editTask(item)}
    >Edit</Button>
            <Button variant="outlined" style={{ margin: 1 }} color="primary" id={item} onClick={()=>props.deleteTask(item)}
    >Delete</Button>
            </li>  
          ))
          }
        </List> 
        </div>
    )
}
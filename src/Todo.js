
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useContext} from 'react';
import { TodoesContext } from './Context.js/TodoesContext';
export default function Todo({todo}) {
  const {todes,setTodes} = useContext(TodoesContext);
  function handleIsDone(){
        const newTodes=todes.map((t)=>{
          if(t.id === todo.id){
            return {...t, isDone: !t.isDone}; 
          }
          return t;
        })
        setTodes(newTodes);
  }
  function handleDelete(){
    const newTodes=todes.filter((t)=>t.id !== todo.id);
    setTodes(newTodes);
  }
  return (
    <Card className='todoCard' sx={{ minWidth: 275 ,background:'#283593',color:'white',marginTop:'5px'}}>
      <CardContent>
        <Grid container spacing={2}>
        <Grid size={8}>
        <Typography gutterBottom variant='h5' sx={{textAlign:'right'}} >
          {todo?.title}
        </Typography>
        <Typography gutterBottom variant='h6' sx={{textAlign:'right'}} >
         {todo?.description}
        </Typography>
        </Grid>
        <Grid size={4} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <IconButton onClick={handleIsDone} className='iconButton' aria-label="check" size="small" sx={{color:todo.isDone ? 'white' : '#8bc34a',backgroundColor:todo.isDone ? '#8bc34a' : 'white',border:todo.isDone ? '3px solid #8bc34a' : '3px solid white'}}>
        <CheckIcon fontSize="inherit" />
        </IconButton>
           <IconButton className='iconButton' aria-label="ModeEditIcon" size="small" sx={{color:'#1769aa',backgroundColor:'white',border:'3px solid #1769aa'}}>
        <ModeEditIcon fontSize="inherit" />
        </IconButton>
           <IconButton onClick={handleDelete} className='iconButton' aria-label="DeleteIcon" size="small" sx={{color:'#f44336',backgroundColor:'white',border:'3px solid #f44336'}}>
        <DeleteIcon fontSize="inherit" />
        </IconButton>
        </Grid>
        </Grid>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

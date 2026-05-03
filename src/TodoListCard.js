import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Todo from './Todo';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useContext} from 'react';
import { TodoesContext } from './Context.js/TodoesContext';
import {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
export default function TodoListCard() {
  const {todes,setTodes} = useContext(TodoesContext);
  const [titleInput,setTitleInput]=useState('');
  function handleAddClick(){
    const newTodo={
      id:uuidv4(),
      title:titleInput,
      description:'انتظار التنفيذ',
      isDone:false
    }
    setTodes([...todes,newTodo]);
    setTitleInput('');
  }
  const todosJsx=todes.map((todo)=>{
    return <Todo key={todo.id} todo={todo}/>
  })
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary'}} variant='h2'>
          مهامي
        </Typography>
        <Divider />
     <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="right" >
        الكل
      </ToggleButton>
      <ToggleButton value="center" >
        المنجز
      </ToggleButton>
      <ToggleButton value="left" >
        غير المنجز
      </ToggleButton>

    </ToggleButtonGroup>
    <Divider />
    {todosJsx}
      <Grid container spacing={2} sx={{marginTop:'10px'}}>
        <Grid size={8} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <TextField sx={{ width: '100%' }} id="filled-basic" label="Filled" variant="filled"
        value={titleInput}
        onChange={(e)=>{
          setTitleInput(e.target.value);
        }}
        />

        </Grid>
        <Grid size={4} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <Button onClick={()=>{handleAddClick()}} variant="contained" sx={{width:'100%',height:'100%'}}>اضافه</Button>

        </Grid>
        </Grid>
      </CardContent>

    </Card>
  );
}

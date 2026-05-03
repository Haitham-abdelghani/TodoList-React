import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TodoListCard from './TodoListCard';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { TodoesContext } from './Context.js/TodoesContext';
import { v4 as uuidv4 } from "uuid";
import {useState} from 'react';
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Alexandria',
  },
});
const initTodos =[
  {
  id:uuidv4(),
  title:'المهمه الاولى',
  description:'المهمه الاولى الانتظار التنفيذ',
  isDone:false
},
{
  id:uuidv4(),
  title:'المهمه الثانيه',
  description:'المهمه الثانيه الانتظار التنفيذ',
  isDone:true
  },
  {
  id:uuidv4(),
  title:'المهمه الثالثه',
  description:'المهمه الثالثه الانتظار التنفيذ',
  isDone:false
  }
]
function App() {
  const [todes,setTodes]=useState(initTodos);
  const style = {
    display:'flex',
    justifiedContent:'center',
    alignItems:'center',
    backgroundColor:'red',
    height:'100vh',
    direction:'rtl'
  };
  return (
    <ThemeProvider theme={theme}>
    <div className="App" 
    style={style}>
            <CssBaseline />
            <Container maxWidth="sm">
              <h1 style={{ fontFamily: 'AThin' }}>قائمه المهام</h1>
              <TodoesContext.Provider value={{todes:todes,setTodes:setTodes}}>
              <TodoListCard />
              </TodoesContext.Provider>
            </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;

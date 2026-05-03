import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TodoListCard from './TodoListCard';
export default function TodoList() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <TodoListCard />
      </Container>
    </React.Fragment>
  );
}

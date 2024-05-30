import React from 'react';
import TodoApp from './todoapp';
import Container from './container';

const OneTimeTasks: React.FC = () => {
  return (
    <Container>
      <h1>One-time Tasks</h1>
      <TodoApp type="one-time" />
    </Container>
  );
};

export default OneTimeTasks;

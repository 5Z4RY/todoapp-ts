import React from 'react';
import TodoApp from './todoapp';
import Container from './container';

const DailyTasks: React.FC = () => {
  return (
    <Container>
      <h1>Daily Tasks</h1>
      <TodoApp type="daily" />
    </Container>
  );
};

export default DailyTasks;

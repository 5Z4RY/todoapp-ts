import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import Container from './container';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Welcome to Todo App</h1>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/daily-tasks"
          style={{ marginRight: '10px' }}
        >
          Daily Tasks
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/one-time-tasks"
        >
          One-time Tasks
        </Button>
      </Box>
    </Container>
  );
};

export default Home;

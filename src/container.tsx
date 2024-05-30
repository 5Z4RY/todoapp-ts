import React from 'react';
import { Box } from '@mui/material';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="top"
      alignItems="center"
      minHeight="100vh"
    >
      {children}
    </Box>
  );
};

export default Container;

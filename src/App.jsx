import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './Components/Homepage';
import { createTheme, ThemeProvider  } from '@mui/material';

const router = createBrowserRouter([

  { path: '/', element: <Homepage /> }

]);

const theme = createTheme({
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: 'transparent !important',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 8, 
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <>

        <RouterProvider router={router} />

      </>
    </ThemeProvider>
    
  )
};

export default App
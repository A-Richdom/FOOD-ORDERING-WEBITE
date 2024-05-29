import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './Components/Homepage';
import { createTheme, ThemeProvider  } from '@mui/material';

const router = createBrowserRouter([

  { path: '/', element: <Homepage /> }

]);

const theme = createTheme({

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
import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './Components/Homepage';
import { createTheme, ThemeProvider  } from '@mui/material';
import PopOverPage from './Components/PopOverPage';
import Dashboard from './Components/Dashboard';
import DishReport from './Components/DishReport';
import Report from './Components/Report';
import Settings from './Components/Settings';
import AddDishModal from './Components/AddDishModal';

//Stripe Imports..//
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Initialize Stripe with your publishable key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const router = createBrowserRouter([

  { path: '/', element: <Homepage /> },

  { path: 'popOverPage', element: <PopOverPage /> },

  { path: 'dashboard', element: <Dashboard /> },

  { path: 'dishReport', element: <DishReport /> },

  { path: 'report', element: <Report /> },

  { path: 'settings', element: <Settings/> },



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
        <Elements stripe={stripePromise}>

        <RouterProvider router={router} />

        </Elements>
      </>
    </ThemeProvider>
    
  )
};

export default App
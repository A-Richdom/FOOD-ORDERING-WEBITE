import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Components/FEATURES/Store.js'
// import { PersistGate } from 'redux-persist/integration/react'
// import LoadingSpinner from './Components/LoadingSpinner.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      {/* <PersistGate loading={<LoadingSpinner />} persistor={persistor}> */}

        <App />

      {/* </PersistGate> */}
    </Provider>

  </React.StrictMode>,
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


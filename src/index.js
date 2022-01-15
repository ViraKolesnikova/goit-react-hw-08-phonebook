import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import { store} from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

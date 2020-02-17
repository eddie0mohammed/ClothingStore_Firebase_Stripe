import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';

import {createStore, applyMiddleware, compose} from 'redux';

// import {rootReducer} from './Redux/Reducers/rootReducer';
import persistReducer from './Redux/Reducers/rootReducer';

import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistReducer, composeEnhancers(
    applyMiddleware()
  ));

const persistor = persistStore(store);



ReactDOM.render(


<Provider store={store}>
    <BrowserRouter>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </BrowserRouter>
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

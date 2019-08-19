import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './assets/scripts/common'
import { createStore, applyMiddleware,  } from "redux";
import {Provider} from "react-redux";
import initialState from './initial-state.js';
import reducer from './reducers'
import thunk from 'redux-thunk';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    
    , document.getElementById('root'));
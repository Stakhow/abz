import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './assets/scripts/common'
import { createStore, bindActionCreators } from "redux";
import {Provider} from "react-redux";

import reducer from './reducers'
import * as actions from './actions/actions';

const store = createStore(reducer);
const { dispatch } = store;

const { getMenu } = bindActionCreators(actions, dispatch);



store.subscribe(()=>{
    console.log(store.getState());
});

document.querySelector('body')
    .addEventListener('click', getMenu);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    
    , document.getElementById('root'));
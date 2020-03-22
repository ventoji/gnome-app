ReactDOM.render(jsx,document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {configureStore} from './store/configureStore';

import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore;
const state = store.getState();

 // console.log(state)

 // const unsubscribe = store.subscribe(() => console.log(store.getState())) 

const jsx = (
    <Provider store={store}> 
         <App />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
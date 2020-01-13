import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import store from "./redux"
import {Provider} from "react-redux"
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

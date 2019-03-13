import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux configuration
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
// Our reducers
import { test1Reducer, test3Reducer } from './reducers';

// Translate
import './i18n/i18n';

// Combine reducers
const rootReducer = combineReducers({
    test1State: test1Reducer,
    test3State: test3Reducer
});
// Create store
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

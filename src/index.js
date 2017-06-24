import React from 'react';
import {render} from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Redux stuff
import {Provider} from "react-redux";
import storeFactory from "./store/index";
import init from "./store/initialState.json"

// Router stuff
import {Router} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

const store = storeFactory(init);

// Initialize the app
render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

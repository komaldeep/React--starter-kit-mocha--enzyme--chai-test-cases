import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import store from './Store/AppStore';
// import './index.css';
import { createStore } from 'redux';
import { hashHistory } from 'react-router';
import {Link, browserHistory, Router, Route  } from "react-router";


import Gravatar from './Gravatar'

render(
    <Provider>
        <Router history={browserHistory}>
            <div>
                <Route path="/" component={Gravatar}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
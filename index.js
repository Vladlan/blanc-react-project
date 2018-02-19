'use strict';

import React from 'react';
import { render } from 'react-dom';
import ChangePasswordForm from './ChangePasswordForm';
import reducer from './store/reducer.js';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import {connect} from 'react-redux';

import * as actionCreators from './actions/actions'

const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
    console.log(store);
   return <ChangePasswordForm
   state={store.getState()}/>
};

const mapStateToProps = state => {
    console.log(state);
    return {
        state: state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changePassword: (newPassword) => dispatch(actionCreators.changePassword(newPassword))
    };
};

connect(mapStateToProps, mapDispatchToProps)(App);

render(
    (<Provider store={store}>
        <App/>
    </Provider>),
    document.getElementById('react-root')
);

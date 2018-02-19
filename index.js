'use strict';

import React from 'react';
import { render } from 'react-dom';
import ChangePasswordForm from './ChangePasswordForm';
import reducer from './store/reducer.js';
import {Provider} from 'react-redux'
import {createStore} from 'redux';


const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);


const App = () => {
   return <ChangePasswordForm/>
};

render(
    (<Provider store={store}>
        <App/>
    </Provider>),
    document.getElementById('react-root')
);

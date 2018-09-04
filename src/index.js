import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Main from './Main';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
       <Main/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();










import React from 'react';
import ReactDOM from 'react-dom';
import {StoreProvider} from 'easy-peasy';

import {store} from './store';
import {MaterialThemeProvider} from './config/themeProvider';
import App from './App';
import './index.scss';

const Root = () => {
    return (
        <StoreProvider store={store}>
            <MaterialThemeProvider>
                <App />
            </MaterialThemeProvider>
        </StoreProvider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));

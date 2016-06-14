import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { message } from './config';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import fetchTranslation from './actions/index';
import { dispatch } from 'redux';

const store = configureStore();

//store.dispatch(fetchTranslation);

render(
    <Provider store={store}>
    	<App />
    </Provider>	
    ,
  document.getElementById('root')
)
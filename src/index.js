import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './bootstrap/css/bootstrap.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'
import fbConfig from './config/fbConfig'
import {createStore,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

const store = createStore(rootReducer, 
   compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(fbConfig),
      reactReduxFirebase(fbConfig)
   )
);

ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();

//registerServiceWorker();
//import registerServiceWorker from './registerServiceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

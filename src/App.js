import React, { Component } from 'react';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer'
import {Provider} from 'react-redux'
import {AppRoutes} from './router'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory()
const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history),thunk))
) 

class App extends Component {
  
  render() {

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRoutes/>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

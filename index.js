import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './reducers/BooksApp'
import Books from './components/containers/Books'
import {  applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import TwitchApp from './reducers/TwitchApp';
import Streams from './components/containers/Streams'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

class App extends Component {
  render() {
    return (
      <div>
        <Books store={store}/>
        <div className="stream-container">
           <Streams  streamStore={streamStore}/>
        </div>
      </div>
    )
  }
}

let store = createStore(BooksApp)

let streamStore  = createStore(
  TwitchApp,
  applyMiddleware(thunk, logger)
);



ReactDOM.render(
  <Provider store={store}>
     <App/>
  </Provider>,
  document.getElementById('app')
)

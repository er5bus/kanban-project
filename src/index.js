import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import tasks from './reducers'
import { Kanban } from './components/Kanban';

import * as serviceWorker from './serviceWorker';

const store = createStore(tasks, devToolsEnhancer())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  });

  module.hot.accept('./components/Kanban/Kanban', () => {
    const NextApp = require('./components/Kanban/Kanban').default
    ReactDOM.render(
      <Provider store={store}><NextApp /></Provider>,
      document.getElementById('root')
    )
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

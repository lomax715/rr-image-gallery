import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { albums } from './components/album/reducers';

const async = store => next => action => {
  if(typeof action === 'function') {
    action(store.dispatch, store.getState);
  }
  else {
    return next(action);
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  albums,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;

import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { image } from './components/images/reducers';
import { loading } from './components/app/reducers';
import promiseMiddleware from './promiseMiddleware';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  image,
  loading
});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;

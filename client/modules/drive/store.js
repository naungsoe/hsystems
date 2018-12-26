import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as commonReducers from '../common/reducers';
import * as courseReducers from './reducers';

const reducers = combineReducers({
  ...commonReducers,
  ...courseReducers
});

const logger = (store) => (next) => (action) => {
  console.log('prev state', store.getState());
  console.log('action', action);
  let result = next(action);
  console.log('next state', store.getState());
};

const storeFactory = (state) => {
  return createStore(
    reducers,
    state,
    applyMiddleware(
      logger,
      thunk
    )
  );
};

export default storeFactory;

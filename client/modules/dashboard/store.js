import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as commonReducers from '../common/reducers';
import * as todoReducers from '../../containers/TodoList/reducers';

const reducers = combineReducers({
  ...commonReducers,
  ...todoReducers
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
    applyMiddleware(logger)
  );
};

export default storeFactory;

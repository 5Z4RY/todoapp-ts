import { createStore, compose } from 'redux';
import tasksReducer from './reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(tasksReducer, composeEnhancers());

export default store;

import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './Reducer/rootReducer';
import thunk from 'redux-thunk';

//1- creat store
export const store = createStore(rootReducer, applyMiddleware(thunk));
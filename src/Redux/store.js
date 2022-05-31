import { createStore } from 'redux';
import { rootReducer } from './Reducer/rootReducer';

//1- creat store
export const store = createStore(rootReducer);
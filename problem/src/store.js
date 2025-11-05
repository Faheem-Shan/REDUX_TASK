import { createStore } from 'redux';
import counterReducer from './counterreducer'

export const store = createStore(counterReducer);
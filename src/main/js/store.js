/**
 * Created by user on 3/29/18.
 */
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
export default store;
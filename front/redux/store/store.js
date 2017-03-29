import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const store = createStore(reducer, undefined, window.devToolsExtension ? window.devToolsExtension() : undefined);

export default store;

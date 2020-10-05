import { combineReducers } from 'redux';
import noteReducer from './noteReducer';

export default combineReducers({
    //package all the reducers
    note: noteReducer
});
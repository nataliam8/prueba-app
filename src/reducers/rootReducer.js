import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';

//Reducer que combina todos los reducer de la app
export const rootReducer = combineReducers({
    ui: uiReducer,

    //TODO: AuthReducer
});


import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { categoriasReducer } from './categoriasReducer';
import { productosReducer } from './productosReducer';
import { uiReducer } from './uiReducer';

//Reducer que combina todos los reducer de la app
export const rootReducer = combineReducers({
    auth: authReducer,
    categorias: categoriasReducer,
    productos: productosReducer,
    ui: uiReducer,
});


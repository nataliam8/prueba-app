import { types } from "../types/types";
// {
//     id: 123,
//     nombre: 'Electrodomésticos',
//     descripcion: 'Esta es una categoria'
// }
const initialState = {
    categorias: [],
    activeCategoria: null
};

export const categoriasReducer = ( state = initialState, action) => {
    switch (action.type) {
        case types.categoriaSetActive:
            return {
                ...state,
                activeCategoria: action.payload 
            }

        case types.categoriaAddNew:
            return {
                ...state,
                categorias: [
                    ...state.categorias,
                    action.payload
                ]
            }
        
        case types.categoriaClearActive:
            return  {
                ...state,
                activeCategoria: null
            }
        
        case types.categoriaUpdated:
            return {
                ...state,
                categorias: state.categorias.map(
                    c => ( c.id === action.payload.id ) ? action.payload : c
                )
            }

        case types.categoriaDeleted:
            return {
                ...state,
                categorias: state.categorias.filter(
                    c => ( c.id !== state.activeCategoria.id )
                ),
                activeCategoria: null
            }

        case types.categoriaLoaded:
            return {
                ...state,
                categorias: [ ...action.payload ]
            }

        default:
            return state;
    }
}
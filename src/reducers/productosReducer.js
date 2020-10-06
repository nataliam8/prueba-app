import { types } from "../types/types";
// {
//     id: new Date().getTime(),
//     nombre: 'Arroz',
//     tipo: 'Abarrotes',
//     precio: 35000,
//     cantidad: 50
// }
const initialState = {
    productos: [],
    activeProducto: null
};

export const productosReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.productoSetActive:
            return {
                ...state,
                activeProducto: action.payload 
            }

        case types.productoAddNew:
            return {
                ...state,
                productos: [
                    ...state.productos,
                    action.payload
                ]
            }

        case types.productoClearActive:
            return  {
                ...state,
                activeProducto: null
            }

        case types.productoUpdated:
            debugger;
            return {
                ...state,
                productos: state.productos.map( 
                    p => ( p.id === action.payload.id ) ? action.payload : p
                )
            }

        case types.productoDeleted:
            return {
                ...state,
                productos: state.productos.filter(
                    p => ( p.id !== state.activeProducto.id )
                ),
                activeProducto: null
            }

        case types.productoLoaded:
            return {
                ...state,
                productos: [...action.payload]
            }
    
        default:
            return state;
    }
}
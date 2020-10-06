import { types } from "../types/types";

const initialState = {
    modalOpen: false,
    byCategoria: false,
};

//Reducer para la interfaz de usuario (ui)
export const uiReducer = ( state = initialState, action ) => {
    
    switch (action.type) {
        case types.uiOpenModal:
            return { 
                ...state,
                modalOpen: true
            }

        case types.uiCloseModal:
            return { 
                ...state,
                modalOpen: false
            }

        case types.uiActiveByCategoria:
            return { 
                ...state,
                byCategoria: true
            }

        case types.uiDesactiveByCategoria:
            return { 
                ...state,
                modalOpen: false
            }
        
            
    
        default:
            return state;
    }
}
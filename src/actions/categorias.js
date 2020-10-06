import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const categoriaStartAddNew = ( categoria, idUsuario ) => {
    // debugger;
    categoria.idUsuario = idUsuario;
    return async(dispatch) => {
        try {
            const resp = await fetchConToken('addCategoria', categoria, 'POST');
            const body = await resp.json();
            console.log(body.data);
            if( body.result ){
                categoria.id = body.data.id;
                console.log(categoria);
                dispatch( categoriaAddNew (categoria) );
                Swal.fire('Guardado', body.mensaje,'success');
            }else{
                Swal.fire('Error', body.mensaje, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
};

const categoriaAddNew = ( categoria ) => ({
    type: types.categoriaAddNew,
    payload: categoria
});

export const categoriaSetActive = ( categoria ) => ({
    type: types.categoriaSetActive,
    payload: categoria
});

export const categoriaClearActive = () => ({ type: types.categoriaClearActive })

export const categoriaStartUpdate = ( categoria, idUsuario ) => {
    categoria.idUsuario = idUsuario;
    return async(dispatch) => {
        try {
            const resp = await fetchConToken(`editCategoria`, categoria, 'POST');
            const body = await resp.json();

            // console.log(body);
            if(body.result){
                dispatch( categoriaUpdated(categoria) );
                Swal.fire('Guardado', body.mensaje, 'success');
            }else{
                Swal.fire('Error', body.mensaje, 'error');       
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const categoriaUpdated = ( categoria ) => ({
    type: types.categoriaUpdated,
    payload: categoria
});

export const categoriaStartDelete = () => {
    return async(dispatch, getState) => {
        const { id } = getState().categorias.activeCategoria;
        
        try {
            const resp = await fetchConToken(`eliminarCategoria/${id}`,{}, 'DELETE');
            const body = await resp.json();
            console.log(body);
            if(body.result){
                // console.log(body);
                dispatch( categoriaDeleted() );
                Swal.fire('Guardado', body.mensaje, 'success');
            }else{
                Swal.fire('Error', body.mensaje, 'error');       
            }
        } catch (error) {
            console.log(error);
        }
    }
};

const categoriaDeleted = () => ({ type: types.categoriaDeleted });

export const categoriaStartLoading = (idUsuario) => {
    return async(dispatch) => {
        try {
            const resp = await fetchConToken(`categorias/${idUsuario}`);
            const body = await resp.json();

            const categorias = body.data;

            dispatch( categoriaLoaded(categorias) )
            
        } catch (error) {
            
        }
    }
};

const categoriaLoaded = ( categorias ) => ({
    type: types.categoriaLoaded,
    payload: categorias
});
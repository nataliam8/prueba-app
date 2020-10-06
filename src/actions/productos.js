import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const productoStartAddNew = ( producto, tipoCat) => {
    producto.idCategoria = tipoCat;
    return async(dispatch) => {
        try {
            const resp = await fetchConToken('addProducto', producto, 'POST');
            const body = await resp.json();
            console.log(body);
            if( body.result ){

                dispatch( productoAddNew (producto) );
                Swal.fire('Guardado', body.mensaje,'success');
            }else{
                Swal.fire('Error', body.mensaje, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}
const productoAddNew = ( producto ) => ({
    type: types.productoAddNew,
    payload: producto
});

export const productoSetActive = ( producto ) => ({
    type: types.productoSetActive,
    payload: producto   
});

export const productoClearActive = () => ({ type: types.productoClearActive })

export const productoStartUpdated = (producto, tipoCat) => {
    producto.idCategoria = tipoCat;
    return async(dispatch) => {
        try {
            const resp = await fetchConToken(`editProducto`, producto, 'POST');
            const body = await resp.json();
            // debugger;
            console.log(body);
            if(body.result){    
                Swal.fire('Guardado', body.mensaje, 'success');
            }else{
                Swal.fire('Error', body.mensaje, 'error');       
            }
        } catch (error) {
            console.log(error);
        }
    }
};

export const productoStartDelete = () => {
    return async(dispatch, getState) => {
        const { id } = getState().productos.activeProducto;
        
        try {
            const resp = await fetchConToken(`eliminarProducto/${id}`,{}, 'DELETE');
            const body = await resp.json();
            console.log(body);
            if(body.result){
                // console.log(body);
                dispatch( productoDeleted() );
                Swal.fire('Guardado', body.mensaje, 'success');
            }else{
                Swal.fire('Error', body.mensaje, 'error');       
            }
        } catch (error) {
            console.log(error);
        }
    }    
}
// const productoUpdated = ( producto) => ({
//     types: types.productoUpdated,
//     payload: producto
// });

export const productoDeleted = () => ({ type: types.productoDeleted });

export const productoStartLoading = (idUsuario) => {
    return async(dispatch) => {
        try {
            // debugger;
            const resp = await fetchConToken(`productosUsuario/${idUsuario}`);
            const body = await resp.json();

            // console.log(body);
            const productos = body.data;

            dispatch( productoLoaded(productos) );
        } catch (error) {
            console.log(error)
        }
    }
};

export const productoByCategoriaStartLoading = (path) => {
    const idCategoria = path;
    return async(dispatch) => {
        try {
            // debugger;
            const resp = await fetchConToken(`productos/${idCategoria}`);
            const body = await resp.json();

            // console.log(body.data);
            const productos = body.data;

            dispatch( productoLoaded(productos) );
        } catch (error) {
            console.log(error)
        }
    }
};

export const productoByNombreStartLoading = (item) => {
    // const idProducto = buscar;
    return async(dispatch) => {
        try {
            // debugger;
            // const resp = await fetchConToken(`producto/${idProducto}`);
            // const body = await resp.json();

            // console.log(body);
            // const productos = body.data;

            dispatch( productoLoaded(item) );
        } catch (error) {
            console.log(error)
        }
    }
};

const productoLoaded = ( productos ) => ({
    type: types.productoLoaded,
    payload: productos
});
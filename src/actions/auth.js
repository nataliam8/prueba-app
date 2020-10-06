import Swal from "sweetalert2";
import { fetchConToken, fetchPostToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin = (correo,password) => {
    return async( dispatch ) => {
        const resp = await fetchSinToken( 'login', {correo, password}, 'POST' );
        const body = await resp.json();

        // console.log("1",body);

        if( body.result ){
            // console.log(body.data);
            const {id,nombre,correo} = body.data;
            const resp1 = await fetchPostToken( 'token', {id,nombre,correo}, 'POST' );
            const body1 = await resp1.json();

            if(body1.result){
                localStorage.setItem('token', body1.data);
                localStorage.setItem('token-init-date', new Date().getTime() );

                dispatch( login({
                    id: body1.id,
                    nombre: body1.nombre
                }));

            }

        } else {
            Swal.fire('Error', body.message, 'error');
            dispatch( checkingFinish() );
        }
    }
}

export const startChecking = () => {
    return async(dispatch) => {
        const resp = await fetchConToken('reNewToken');
        const body = await resp.json();
;
        if(body.result){
            localStorage.setItem('token', body.data);
            localStorage.setItem('token-init-date', new Date().getTime() );
        
            dispatch( login({
                id: body.id,
                nombre: body.nombre
            }));
        } else {
            // Swal.fire('Error', body.message, 'error');
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

export const starRegister = ( nombre, correo, password ) => {
    return async( dispatch ) => {
        const resp = await fetchSinToken( '/register', {nombre, correo, password}, 'POST' );
        const body = await resp.json();

        console.log(body);

        if( body.result ){
            Swal.fire('Guardado', body.mensaje, 'success');
        } else {    
            Swal.fire('Error', body.mensaje, 'error');
        }
    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () =>{
    return (dispatch) => {
        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({type: types.authLogout})
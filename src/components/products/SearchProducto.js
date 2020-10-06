import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { productoByNombreStartLoading, productoStartLoading } from '../../actions/productos';
import Swal from 'sweetalert2';

export const SearchProducto = ({history}) => {

    const dispatch = useDispatch();
    
    let { productos } = useSelector( state => state.productos );
    const { id } = useSelector( state => state.auth );
    
    const idUsuario = id;
    
    const [formValues, setFormValues] = useState( {searchText:''});
    const { searchText } = formValues;
    
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });

        const text = target.value;

        if( text.length > 0 ){
            const searchText = productos.filter( producto => {
            // console.log(producto.nombre);
            const nombreProducto = producto.nombre.toUpperCase();
            const valorBuscado = text.toUpperCase();
            console.log(valorBuscado);
            return nombreProducto.indexOf(valorBuscado) > -1;
        });

        console.log(searchText);
                dispatch( productoByNombreStartLoading(searchText));
        }else{
            dispatch( productoStartLoading(idUsuario) );
        }
    };
 
    return (
        <div className="container mt-4 mb-4">

             <div className="row">
                <input
                    type="text"
                    placeholder="Buscar producto ..."
                    className="form-control col-10"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ handleInputChange }
                />
                <div className="col-2">
                    <button
                        type="submit"
                        className="btn btn-block btn-outline-primary"
                        onClick={handleInputChange}
                    >
                        Buscar...
                    </button>
                </div>
            </div> 
        </div>
    )
}

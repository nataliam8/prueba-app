import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { productoByCategoriaStartLoading, productoByNombreStartLoading, productoStartLoading } from '../../actions/productos';

export const SearchProducto = ({history}) => {

    const dispatch = useDispatch();
    
    let { productos } = useSelector( state => state.productos );
    const { id } = useSelector( state => state.auth );
        
    let path = (window.location.href.split('/'));
    path = path[4];
    console.log(path);

    const [formValues, setFormValues] = useState( {searchText:''});
    const { searchText } = formValues;
    
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });

        const text = target.value;
        // debugger;
        if( text.length > 0 ){
            const searchText = productos.filter( producto => {
            // console.log(producto.nombre);
            const nombreProducto = producto.nombre.toUpperCase();
            const valorBuscado = text.toUpperCase();
            // console.log(valorBuscado);
            return nombreProducto.indexOf(valorBuscado) > -1;
        });

        // console.log(searchText);
                dispatch( productoByNombreStartLoading(searchText));
        }else{
            if( path === undefined){
                dispatch( productoStartLoading(id) );
            }else {
                dispatch( productoByCategoriaStartLoading(path) );
            }
        }
    };
 
    return (
        <div className="container mt-4 mb-4">

             <div className="row">
                <input
                    type="text"
                    placeholder="Buscar producto ..."
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ handleInputChange }
                />
            </div> 
        </div>
    )
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductosModal } from './ProductosModal';
import { uiOpenModal } from '../../actions/ui';
import { ProductosList } from './ProductosList';
import { categoriaStartLoading } from '../../actions/categorias';
import { productoStartLoading } from '../../actions/productos';
import { SearchProducto } from './SearchProducto';

export const Productos = ({history}) => {

    const dispatch = useDispatch();
    const { id } = useSelector( state => state.auth );

    useEffect(() => {
        dispatch ( categoriaStartLoading(id) );
        dispatch( productoStartLoading(id) );
    }, [dispatch,id]);

    const openModal = (e) => {
        dispatch( uiOpenModal() );
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <h2 className="col-6">Lista de productos </h2>
                <div className="col-6 right">
                    <button 
                        className="btn btn-warning btn-lg right"
                        onClick={ openModal }
                    >
                        <i className="fas fa-plus"></i> Agregar producto
                    </button>
                </div>

            </div>
            <hr/>

            <SearchProducto />
            <ProductosList />

            <ProductosModal />
        </div>    
    )
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProdutosListByCategoria } from './ProdutosListByCategoria';
import { ProductosModal } from './ProductosModal';
import { uiOpenModal } from '../../actions/ui';
import { productoByCategoriaStartLoading } from '../../actions/productos';
import { categoriaStartLoading } from '../../actions/categorias';

export const ProductosByCategoria = ({ history }) => {
    const dispatch = useDispatch();
    const { id } = useSelector( state => state.auth );
    const { categorias } = useSelector( state => state.categorias );

    let path = (window.location.href.split('/'));
    path = path[4];
    console.log(path);

    useEffect(() => {
        dispatch ( categoriaStartLoading(id) );
        dispatch( productoByCategoriaStartLoading(path) );
    }, [dispatch,id,path]);

    const openModal = (e) => {
        dispatch( uiOpenModal() );
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <h2 className="col-6">Produtos de la categoria: <span></span> </h2>
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
            

            <ProdutosListByCategoria />

            <ProductosModal />
        </div> 
    )
}

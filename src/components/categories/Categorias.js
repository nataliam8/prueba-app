import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CategoriasModal } from './CategoriasModal';
import { uiOpenModal } from '../../actions/ui';
import { CategoriaList } from './CategoriaList';
import { useEffect } from 'react';
import { categoriaStartLoading } from '../../actions/categorias';

export const Categorias = (  ) => {

    const dispatch = useDispatch();
    const { id } = useSelector( state => state.auth );

    useEffect(() => {
        dispatch ( categoriaStartLoading(id) );
    }, [dispatch,id]);

    const openModal = (e) => {

        dispatch( uiOpenModal() );

    };


    return (
        <div className="container mt-5">
            <div className="row">
                <h2 className="col-6">Lista de categorias </h2>
                <div className="col-6 right">
                    <button 
                        className="btn btn-warning btn-lg right"
                        onClick={ openModal }
                    >
                        <i className="fas fa-plus"></i> Agregar categoría
                    </button>
                </div>

            </div>
            <hr/>

            <CategoriaList />
            
            <CategoriasModal />

        </div>
    )
}

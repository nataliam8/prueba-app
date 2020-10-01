import React from 'react';
import { useDispatch } from 'react-redux';

import { CategoriasModal } from './CategoriasModal';
import { uiOpenModal } from '../../actions/ui';

export const Categorias = () => {

    const dispatch = useDispatch();

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
            
            <div className="card mt-3" style={{width: 20 + 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Categoria</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div className="row">
                        <div className="col-7">
                            <button className="btn btn-primary"><i className="fas fa-search-plus"></i> Ver productos</button>
                        </div>
                        <div className="col-5 right">
                            <button className="btn btn-success"><i className="fas fa-edit"></i></button>
                            <button className="btn btn-danger ml-1"><i className="far fa-trash-alt"></i></button>
                        </div>

                    </div>
                </div>
            </div>

            <CategoriasModal />
        </div>
    )
}

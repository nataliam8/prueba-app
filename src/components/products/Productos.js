import React from 'react';
import { useDispatch } from 'react-redux';

import { ProductosModal } from './ProductosModal';
import { uiOpenModal } from '../../actions/ui';

export const Productos = () => {

    const dispatch = useDispatch();

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

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Tools</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Televisor</td>
                        <td>Electrodoméstico</td>
                        <td>1000000</td>
                        <td>100</td>
                        <td>
                            <button className="btn btn-success"><i className="fas fa-edit"></i></button>
                            <button className="btn btn-danger ml-1"><i className="far fa-trash-alt"></i></button>
                        </td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Papel Higinieco</td>
                        <td>Aseo</td>
                        <td>10000</td>
                        <td>100</td>
                        <td>
                            <button className="btn btn-success"><i className="fas fa-edit"></i></button>
                            <button className="btn btn-danger ml-1"><i className="far fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Arroz</td>
                        <td>Abarrotes</td>
                        <td>30000</td>
                        <td>100</td>
                        <td>
                            <button className="btn btn-success"><i className="fas fa-edit"></i></button>
                            <button className="btn btn-danger ml-1"><i className="far fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>

            <ProductosModal />
        </div>    
    )
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { productoSetActive, productoStartDelete, productoStartUpdated } from '../../actions/productos';
import { uiOpenModal } from '../../actions/ui';
import { ProductosModal } from './ProductosModal';

export const ProductosTable = (producto,inc) => {
    // let i = 0;

    const dispatch = useDispatch();

    const selectProducto = (e) => {
        console.log(e);
        dispatch( uiOpenModal() );
        dispatch( productoSetActive(producto) );
        console.log(producto);
    };
    
    const deleteProducto = (e) => {
        //debugger;
        dispatch( productoSetActive(producto) );
        dispatch( productoStartDelete() );

    };
    return (
        <>
            <tbody>
                <tr>
                    <th scope="row">{producto.inc}</th>
                    <td>{producto.nombre}</td>
                    <td>{producto.tipo}</td>
                    <td>$ {Intl.NumberFormat({style: "currency", currency: "COP"}).format(producto.precio)}</td>
                    <td>{Intl.NumberFormat().format(producto.cantidad)}</td>
                    <td>
                        <button 
                            className="btn btn-success"
                            onClick={ selectProducto }
                        ><i className="fas fa-edit"></i></button>
                        <button 
                            className="btn btn-danger ml-1"
                            onClick= { deleteProducto }
                        ><i className="far fa-trash-alt"></i></button>
                    </td>

                </tr>              
            </tbody>

            <ProductosModal />
        </>
    )
}

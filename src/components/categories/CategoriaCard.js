import React from 'react'
import { useDispatch } from 'react-redux';
import { categoriaSetActive, categoriaStartDelete } from '../../actions/categorias';
import { uiOpenModal } from '../../actions/ui';
import { CategoriasModal } from './CategoriasModal';

export const CategoriaCard = ({id, nombre, descripcion}) => {

    // console.log(id, nombre, descripcion);
    const dispatch = useDispatch();

    const selectCategoria = ( e ) => {

        dispatch( uiOpenModal() );
        dispatch( categoriaSetActive( {id, nombre, descripcion} ) );
    };

    const deleteCategoria = () => {
        dispatch( categoriaSetActive( {id, nombre, descripcion} ) );
        dispatch( categoriaStartDelete() );
    };

    const viewProductos = (e) => {
        console.log(e);
        dispatch( categoriaSetActive( {id, nombre, descripcion} ) );
        window.location.href=`/productos/${id}`;
        // dispatch(uiActiveByCategoria(byCategoria));
        // console.log(byCategoria);
    };

    return (
        <>
            <div className="card mr-2 ms-3 ml-3" style={{width: 20 + 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{ nombre }</h5>
                    <p className="card-text">{ descripcion }</p>
                    <div className="row">
                        <div className="col-7">
                            <button onClick={ viewProductos } className="btn btn-primary"><i className="fas fa-search-plus"></i> Ver productos</button>
                        </div>
                        <div className="col-5 right">
                            <button
                                className="btn btn-success"
                                onClick= { selectCategoria } 
                            ><i className="fas fa-edit"></i></button>
                            <button 
                                className="btn btn-danger ml-1"
                                onClick= { deleteCategoria }
                            ><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                 </div>
            </div>
            <CategoriasModal />
        </>
    
    )
}

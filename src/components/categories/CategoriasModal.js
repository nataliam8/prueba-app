import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-modal';
import '../../styles.css';
import '../auth/login.css';
import '../auth/login.css';

import { customStyles } from '../../helpers/customStyles';
import { uiCloseModal } from '../../actions/ui';
import { categoriaClearActive, categoriaStartAddNew, categoriaStartLoading, categoriaStartUpdate } from '../../actions/categorias';

//Enlazar el modal con la app
Modal.setAppElement('#root');

const initCategoria= {
    nombre: '',
    descripcion: '',
};

export const CategoriasModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const { activeCategoria } = useSelector( state => state.categorias );
    const { id } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    //Obtener información del form
    const [formValues, setFormValues] = useState( initCategoria);

    const { nombre, descripcion } = formValues;

    useEffect(() => {
        // console.log(activeCategoria);
        if ( activeCategoria ) {
            setFormValues( activeCategoria );
        } else {
            setFormValues( initCategoria );
        }
    }, [activeCategoria, setFormValues]);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const [nombreValid, setNombreValid] = useState(true);
    const [descValid, setDescValid] = useState(true);


    //Submit del form
    const handleSubmit = (e) => {
        e.preventDefault();
        if( isNombreValid() && isDescValid()){
            // debugger;
            const idUsuario = id;
            //Condicion para ctualizar o crear una nueva categoria
            if( activeCategoria) {
                dispatch( categoriaStartUpdate(formValues, idUsuario) );
                dispatch ( categoriaStartLoading(id) );
    
            } else {
                dispatch( categoriaStartAddNew(formValues, idUsuario));
            }
            closeModal();
            setFormValues( initCategoria );
        };

    };

    //Validaciones del form
    const isNombreValid = () => {
        if( nombre.trim().length === 0 ){
            return setNombreValid(false);
        };
        setNombreValid(true);
        return true;
    };

    const isDescValid = () => {
        if( descripcion.length < 5 ){
            return setDescValid(false);
        };
        setDescValid(true);
        return true;
    };

    const closeModal = () => {
        dispatch( uiCloseModal() );
        dispatch( categoriaClearActive() );
        setFormValues( initCategoria );
    };
    
    return (
        <Modal
          isOpen={ modalOpen }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal modal2"
          overlayClassName="modal-fondo"
        >
            <div className="row">
                <h2 className="col-10 centrar"> 
                    {
                      (!activeCategoria) ? "Agregar categoría" :  "Editar categoria"
                    } 
                </h2>
                <div className="col-2 right">
                    <button 
                        className="btn btn-danger btn-sm"
                        onClick={ closeModal }
                    >X</button>
                </div>
            </div>
            <hr />
            <form className="container" onSubmit={ handleSubmit }>

                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        className={`form-control ${ !nombreValid && 'is-invalid'}`}
                        placeholder="Nombre de la categoría"
                        name="nombre"
                        autoComplete="off"
                        value={ nombre }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <label className="mt-0">Descripción</label>
                    <textarea
                        type="text" 
                        className={`form-control ${ !descValid && 'is-invalid'}`}
                        placeholder="Descripción de la categoría"
                        rows="2"
                        name="descripcion"
                        value={ descripcion }
                        onChange={ handleInputChange }
                    ></textarea>
                </div>

                <button
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}

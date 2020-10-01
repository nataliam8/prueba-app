import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-modal';
import '../../styles.css';
import '../auth/login.css';
import '../auth/login.css';

import { customStyles } from '../../helpers/customStyles';
import { useForm } from '../../hooks/useForm';
import { uiCloseModal } from '../../actions/ui';

//Enlazar el modal con la app
Modal.setAppElement('#root');

export const CategoriasModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    //Obtener información del form
    const [ formValues, handleInputChange ] = useForm({
        nombre: '',
        descripcion: ''
    });

    const { nombre, descripcion } = formValues;

    const [nombreValid, setNombreValid] = useState(true);
    const [descValid, setDescValid] = useState(true);

    //Submit del form
    const handleSubmit = (e) => {
        e.preventDefault();
        if( isNombreValid() && isDescValid()){
            console.log('Formulario correcto');
        }
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
    };
    
    return (
        <Modal
          isOpen={ modalOpen }
        //   onAfterOpen={afterOpenModal}
        //  onRequestClose={closeModal}
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal modal2"
          overlayClassName="modal-fondo"
        >
            <div className="row">
                <h2 className="col-10 centrar"> Agregar categoría </h2>
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
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}

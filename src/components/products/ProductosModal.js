import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-modal';
import '../../styles.css';
import { customStyles } from '../../helpers/customStyles';
import { useForm } from '../../hooks/useForm';
import { uiCloseModal } from '../../actions/ui';

//Enlazar el modal con la app
Modal.setAppElement('#root');

export const ProductosModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    //Obtener información del form
    const [ formValues, handleInputChange ] = useForm({
        nombre: '',
        tipo: '',
        precio: '',
        cantidad: ''
    });

    const { nombre, tipo, precio, cantidad } = formValues;

    const [nombreValid, setNombreValid] = useState(true);
    const [tipoValid, setTipoValid] = useState(true);
    const [precioValid, setPrecioValid] = useState(true);
    const [cantidadValid, setCantidadValid] = useState(true);

    //Submit del form
    const handleSubmit = (e) => {
        e.preventDefault();
        if( isNombreValid() && isTipoValid() && isPrecioValid() && isCantidadValid() ){
            console.log('Formulario correcto');
        }
    };

    //Validaciones del form
    const isNombreValid = () => {
        if( nombre.length === 0 ){
            return setNombreValid(false);
        };
        setNombreValid(true);
        return true;
    };

    const isTipoValid = () => {
        if( tipo.length === 0 ){
            return setTipoValid(false);
        };
        setTipoValid(true);
        return true;
    };

    const isPrecioValid = () => {
        if( precio.length === 0 || precio < 0 ){
            return setPrecioValid(false);
        };
        setPrecioValid(true);
        return true;
    };

    const isCantidadValid = () => {
        if( cantidad.length === 0 || cantidad < 0 ){
            return setCantidadValid(false);
        };
        setCantidadValid(true);
        return true;
    };


    const closeModal = () => {
        dispatch( uiCloseModal() );
    };

    return (
        <Modal
          isOpen={ modalOpen }
        //   onAfterOpen={afterOpenModal}
        //   onRequestClose={closeModal}
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
            <div className="row">
                <h2 className="col-10 centrar"> Agregar producto </h2>
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
                        placeholder="Nombre del producto"
                        name="nombre"
                        autoComplete="off"
                        value={ nombre }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <label>Tipo o categoría</label>
                    <input
                        type="text" 
                        className={`form-control ${ !tipoValid && 'is-invalid'}`}
                        placeholder="Categoría del producto"
                        name="tipo"
                        value={ tipo }
                        onChange={ handleInputChange }
                    ></input>
                </div>

                <div className="form-group">
                    <label>Precio</label>
                    <input
                        type="number" 
                        className={`form-control ${ !precioValid && 'is-invalid'}`}
                        placeholder="Precio del producto"
                        name="precio"
                        value={ precio }
                        onChange={ handleInputChange }
                    ></input>
                </div>

                <div className="form-group">
                    <label>Cantidad</label>
                    <input
                        type="number" 
                        className={`form-control ${ !cantidadValid && 'is-invalid'}`}
                        placeholder="Cantidad"
                        name="cantidad"
                        value={ cantidad }
                        onChange={ handleInputChange }
                    ></input>
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

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-modal';
import '../../styles.css';
import { customStyles } from '../../helpers/customStyles';
import { uiCloseModal } from '../../actions/ui';
import { productoClearActive, productoStartAddNew, productoStartLoading, productoStartUpdated } from '../../actions/productos';

//Enlazar el modal con la app
Modal.setAppElement('#root');

const initProducto= {
    id: 0,
    nombre: '',
    tipo: '',
    precio: '',
    cantidad: '',
};

export const ProductosModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const { id } = useSelector( state => state.auth );
    const { activeProducto } = useSelector( state => state.productos );
    const { categorias } = useSelector( state => state.categorias );

    const dispatch = useDispatch();

    // console.log(categorias);
    //Obtener información del form
    const [formValues, setFormValues] = useState( initProducto );

    const { nombre, tipo, precio, cantidad } = formValues;

    useEffect(() => {
        if ( activeProducto ) {
            setFormValues( activeProducto );
        } else {
            setFormValues( initProducto );
        }
    }, [activeProducto, setFormValues]);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const [nombreValid, setNombreValid] = useState(true);
    const [tipoValid, setTipoValid] = useState(true);
    const [precioValid, setPrecioValid] = useState(true);
    const [cantidadValid, setCantidadValid] = useState(true);


    //Submit del form
    const handleSubmit = (e) => {
        e.preventDefault();
        if( isNombreValid() && isTipoValid() && isPrecioValid() && isCantidadValid() ){
            console.log('Formulario correcto');
            let tipoCat;
            categorias.map( categoria => {
                if(tipo === categoria.nombre){
                    tipoCat=categoria.id;
                }
                return categoria.id;
            });

            console.log(tipoCat);
            const idUsuario = id;
            if( activeProducto ){
                console.log(formValues);
                dispatch( productoStartUpdated(formValues, tipoCat) );
                dispatch( productoStartLoading(idUsuario) );

            } else {
                // const idCategoria = categorias.id;
                console.log(formValues);
                dispatch( productoStartAddNew(formValues, tipoCat));
            }
            closeModal();
            setFormValues( initProducto );
        }

    };

    //Validaciones del form
    const isNombreValid = () => {
        if( nombre.length === 0 || nombre.length > 40){
            return setNombreValid(false);
        };
        setNombreValid(true);
        return true;
    };

    const isTipoValid = () => {
        // debugger;
        if( tipo === ""){
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
        dispatch( productoClearActive() );
        setFormValues( initProducto );
    };

    return (
        <Modal
          isOpen={ modalOpen }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
            <div className="row">
                <h2 className="col-10 centrar">
                {
                      (!activeProducto) ? "Agregar producto" :  "Editar producto"
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
                        placeholder="Nombre del producto"
                        name="nombre"
                        autoComplete="off"
                        value={ nombre }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <label>Tipo o categoría</label>
                        <div className="form-group">
                            <select 
                                className={`form-control ${ !tipoValid && 'is-invalid'}`}
                                id="exampleFormControlSelect1"
                                name="tipo"
                                autoComplete="off"
                                value={ tipo }
                                onChange={ handleInputChange }
                            >
                                <option>Seleccione...</option>
                            {
                                categorias.map( categoria => (
                                    
                                <option key={categoria.id }>{categoria.nombre}</option>
                                ))
                            }

                            </select>
                        </div>

                    
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
                        autoComplete="off"
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

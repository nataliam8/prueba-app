import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import { starRegister } from '../../actions/auth';

import { useForm } from '../../hooks/useForm';
import './login.css';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    //Obtener los datos del formulario con el hook useForm
    const [ formValues, handleInputChange ] = useForm({
        nombre: '',
        correo: '',
        password: '',
        password2: ''
    });

    const { nombre, correo, password, password2 } = formValues;

    //Variables para validar el formulario
    const [nombreValid, setNombreValid] = useState(true);
    const [correoValid, setCorreoValid] = useState(true);
    const [PasswordValid, setPasswordValid] = useState(true);

    //Submit del formulario
    const handleRegister = (e) => {
        e.preventDefault();
        
        if( isNombreValid() && isCorreoValid() && isPasswordValid() ){
            console.log('Formulario correcto');
        };

        if( password !== password2){
            Swal.fire('Error', 'Las constraseñas deben ser iguales', 'error');
        };

        console.log('yes');
        dispatch( starRegister(nombre, correo, password) );
    };

    //Validaciones del form
    const isNombreValid = () => {
        if( nombre.trim().length === 0 ){
            return setNombreValid(false);
        };
        setNombreValid(true);
        return true;
    };

    const isCorreoValid = () => {
        if( !validator.isEmail(correo) ){
            return setCorreoValid(false);
        }
        setCorreoValid(true);
        return true;
    };

    const isPasswordValid = () => {
        if ( password !== password2 || password.length < 5){
            return setPasswordValid(false);
        };
        setPasswordValid(true);
        return true;
    };

    return (

        <div className="container login-container">
        <div className="login-form-2">
        <h3>Registro</h3>
        <form onSubmit={ handleRegister }>
            <div className="form-group">
                <input
                    type="text"
                    className={`form-control ${ !nombreValid && 'is-invalid'}`}
                    placeholder="Nombre"
                    autoComplete="off"
                    name="nombre"
                    value={ nombre }
                    onChange={ handleInputChange }
                />
                { !nombreValid &&
                    <label className="alert2">El nombre es requerido</label>
                }
            </div>
            <div className="form-group">
                <input
                    type="email"
                    className={`form-control ${ !correoValid && 'is-invalid'}`}
                    placeholder="Correo"
                    autoComplete="off"
                    name="correo"
                    value={ correo }
                    onChange={ handleInputChange }
                />
                { !correoValid &&
                    <label className="alert2">El correo no es válido</label>
                }
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className={`form-control ${ !PasswordValid && 'is-invalid'}`}
                    placeholder="Contraseña" 
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />
                { !PasswordValid &&
                    <label className="alert2">La contraseña requiere al menos 5 caracteres</label>
                }
            </div>

            <div className="form-group">
                <input
                    type="password"
                    className={`form-control ${ !PasswordValid && 'is-invalid'}`}
                    placeholder="Repita la contraseña" 
                    name="password2"
                    value={ password2 }
                    onChange={ handleInputChange }
                />
                { !PasswordValid &&
                    <label className="alert2">La contraseña requiere al menos 5 caracteres</label>
                }
            </div>

            <div className="form-group centrar">
                <input 
                    type="submit" 
                    className="btnSubmit" 
                    value="Crear cuenta" />
            </div>

            <Link  
                    to="/login"
                    className="link2 centrar"
            >
                    Ya estás registrado?
            </Link>
        </form>
    </div>
    </div>
    )
}

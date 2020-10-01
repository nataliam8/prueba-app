import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    //Obtener los datos del formulario con el hook useForm
    const [ formValues, handleInputChange ] = useForm({
        correo: '',
        password: '',
    });

    const { correo, password } = formValues;

    //Variables para validar el form
    const [correoValid, setCorreoValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    //Submit del formulario
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log( correo, password );
        if( isCorreoValid() && isPasswordValid() ){
            console.log('Formulario correcto')
        };
    };

    //Validaciones del formulario
    const isCorreoValid = () => {
        if( !validator.isEmail(correo) ){
            return setCorreoValid(false);
        }
        setCorreoValid(true);
        return true;
    }
    const isPasswordValid = () => {
        if ( password.length < 5){
            return setPasswordValid(false);
        };
        setPasswordValid(true);
        return true;
    }
    

    return (
        <div className="container login-container">
            
                <div className="login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className={`form-control ${ !correoValid && 'is-invalid'}`}
                                placeholder="Correo"
                                autoComplete="off"
                                name="correo"
                                value={ correo }
                                onChange={ handleInputChange }
                            />
                            { !correoValid &&
                                <label className="alert">El correo no es válido</label>
                            }
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className={`form-control ${ !passwordValid && 'is-invalid'}`}
                                placeholder="Contraseña"
                                name="password"
                                value={ password }
                                onChange={ handleInputChange }
                            />
                             { !passwordValid &&
                                <label className="alert">La contraseña requiere al menos 5 caracteres</label>
                            }
                        </div>
                        <div className="form-group centrar">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                        <Link
                            to="/registro"
                            className="link1 centrar"
                        >
                            Crear una nueva cuenta
                        </Link>
                    </form>
                </div> 
        </div>
    )
}

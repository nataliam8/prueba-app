import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const { nombre } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    //Función para logout
    const handleLogout = () => {
        dispatch( startLogout() );
    };
    
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
   
            <Link 
                className="navbar-brand" 
                to="/"
            >
                ProductosApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/categorias"
                    >
                        Categorías
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/productos"
                    >
                        Productos
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info"> {nombre} </span>

                    <button 
                        className="btn btn-outline-danger"
                        onClick= { handleLogout }
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Salir</span>
                    </button>
                        
                </ul>
            </div>
        </nav>
)
    
}
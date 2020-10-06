import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Categorias } from '../components/categories/Categorias';
import { Productos } from '../components/products/Productos';
import { ProductosByCategoria } from '../components/products/ProductosByCategoria';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <div>
            <Navbar/>

            <div className="container mt-2">
                    <Switch>
                        <Route exact path="/productos" component={ Productos }/>
                        <Route exact path="/productos/:idCategoria" component={ ProductosByCategoria }/>
                        <Route exact path="/categorias" component={ Categorias }/>

                        <Redirect to="/categorias"/>
                    </Switch>
            </div>
        </div>     
    )
}
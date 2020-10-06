import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const {checking, id} = useSelector( state => state.auth );

    useEffect(() => {
        dispatch( startChecking() )
    }, [dispatch]);

    if( checking ){
        return(<h1>Espere...</h1>)
    };

    return(
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ !!id }
                    />

                    <PublicRoute
                        exact 
                        path="/registro" 
                        component={ RegisterScreen }
                        isAuthenticated={ !!id }
                    />

                    <PrivateRoute
                        path="/" 
                        component={ DashboardRoutes }
                        isAuthenticated={ !!id }
                    />

                    <Redirect to="/" />   
                </Switch>
            </div>

        </Router>
    )
}
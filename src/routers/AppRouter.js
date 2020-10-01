import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Redirect, Route
} from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    
    return(
        <Router>
            <div>
                <Switch>
                    <Route
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                    />

                    <Route
                        exact 
                        path="/registro" 
                        component={ RegisterScreen }
                    />

                    <Route
                        path="/" 
                        component={ DashboardRoutes }
                    
                    />
                    
                    <Redirect to="/login"/>    

                </Switch>
            </div>

        </Router>
    )
}
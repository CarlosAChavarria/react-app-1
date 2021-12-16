import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';

// creamos un componente sin estado, es decir un arrow function para establecer datos

const Router = () => {
    <BrowserRouter>
        <Switch>
            <Route exact path="/"> <App/> </Route>
        </Switch> 
    </BrowserRouter>
}

export default Router;
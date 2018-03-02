import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import App from './App';
import Heroes from './Heroes';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/heroes" component={Heroes}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;
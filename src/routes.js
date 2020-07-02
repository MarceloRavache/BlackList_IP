import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

//pages
import Home from './pages/Home/index';

const Router = ()=>{

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
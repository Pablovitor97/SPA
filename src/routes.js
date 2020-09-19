import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";

import Product from "./pages/main/product";

/*
Routes: estamos utilizando as rotas atraves do browser
<switch> /**uma unica rota sendo chamada ao mesmo tempo
exact path="/" component={Main}: ele so vai se chamado quando ele for realmnete uma
 */

const Routes = () => (
    <BrowserRouter>
    <switch> 
        <Route exact path="/" component={Main} />
        <Route path="/products/:id" component={Product} />
    </switch>
    </BrowserRouter>
);

export default Routes;

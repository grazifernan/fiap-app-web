import React from 'react';
import HomeView from './HomeView'
import {BrowserRouter} from 'react-router-dom'
import Routers from '../Rotas/Routers'


class HomeController extends React.Component {
    constructor() {
        super();
 
    }
    render() {
        return (
            <BrowserRouter>
                <HomeView />                 
                <Routers />  
            </BrowserRouter>
             )


    }
}
export default HomeController;
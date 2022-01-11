import React from "react";
import { Route, Routes } from 'react-router-dom';
import CadastroController from '../Cadastro/CadastroController';
import Home from '../Home/HomeController';
import ConsultaController from "../Consulta/ConsultaController";


export default () => {
       
    return(
        <Routes>
                
            <Route path="/"  element={ <ConsultaController /> }> 
            </Route>

            <Route path="/cadastro"  element={ <CadastroController /> }>
            </Route>
            
            <Route path="/consulta"  element={ <ConsultaController /> }>
            </Route>
        </Routes>

    )


}


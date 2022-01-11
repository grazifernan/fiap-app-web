import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routers from '../Rotas/Routers'
import store from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import ConsultaView from './ConsultaView'
import carInfo from '../../store/modules/carInfo/reducer';
import { getCor, getListaAnos, getListaCores, getListaFiliais, getListaMarcas, getListaModelos } from '../../store/modules/carInfo/actions';

const ConsultaController = () => {

    console.log("CHEGOU NO CONSULTA CONTROLLER");

    //Busca as variaveis do Reducer
    const listarModelos = useSelector((state) => state.carInfo.veiculo.listaModelos);
  
   // Inicia o dispatch
    const dispatch = useDispatch();

    var veiculo = {
        listaMarcas: [],
        listaModelos: [],
        listaAno: [],
        listaCor: [],
        km: 0,
        placa: '',
        listaFiliais: [],
        descricao: '',
        isConnection: false,
        Success: 0
    }
    
    var requestMarca = new XMLHttpRequest();
    requestMarca.open('GET', 'http://localhost:8088/veiculos/listarmarcas', false)
    requestMarca.send(null);
    if (requestMarca.status === 200) {
        veiculo.listaMarcas = JSON.parse(requestMarca.responseText);
    }

    var respCores = new XMLHttpRequest();
    respCores.open('GET', 'http://localhost:8088/veiculos/listarcores', false)
    respCores.send(null);
    if (respCores.status === 200) {
        veiculo.listaCor = JSON.parse(respCores.responseText);
    }

    var respFiliais = new XMLHttpRequest();
    respFiliais.open('GET', 'http://localhost:8088/veiculos/listarfiliais', false)
    respFiliais.send(null);
    if (respFiliais.status === 200) {
        veiculo.listaFiliais = JSON.parse(respFiliais.responseText);
    }

    var anos = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
    veiculo.listaAno = anos

    const buscaModelos = (codMarca) => {
        console.log("entrou no buscaModelos");
        var lst = dispatch(getListaModelos(codMarca == 'Selecione' ? 0 : codMarca));
        return lst
    }

    return (
        <ConsultaView
            buscaModelos={buscaModelos}
            Modelos={listarModelos}
            veiculo={veiculo}
        />
    )

}
export default ConsultaController;
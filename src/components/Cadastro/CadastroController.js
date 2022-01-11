import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routers from '../Rotas/Routers'
import store from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import CadastroView from './CadastroView'
import carInfo from '../../store/modules/carInfo/reducer';
import { createVeiculo, createVeiculoStart, getListaMarcas, getListaMarcasStart, getListaModelos } from '../../store/modules/carInfo/actions';

const CadastroController = () => {

    console.log("CHEGOU NO CADASTRO CONTROLLER");

    //Busca as variaveis do Reducer
    const listaMarcas = useSelector((state) => state.carInfo.veiculo.listaMarcas);
    const listarModelos = useSelector((state) => state.carInfo.veiculo.listaModelos);
    const Success = useSelector((state) => state.carInfo.veiculo.Success);

   // Inicia o dispatch
    const dispatch = useDispatch();

    const [idMarca, setMarca] =  useState('');
    const [idModelo, setModelo] =  useState('');
    const [km, setKm] =  useState('');
    const [placa, setPlaca] =  useState('');
    const [ano, setAno] =  useState('');
    const [idCor, setCor] =  useState('');
    const [idFilial, setFilial] =  useState('');
    const [descricao, setDescricao] =  useState('');
    const [renavam, setRenavam] =  useState('');
    const [valor, setValor] =  useState('');

    const onSelectMarca = (e) => {
        console.log("onSelectMarca " + e.target.value);
        setMarca(e.target.value);
    }   

    const onSelectModelo = (e) => {
        console.log("onSelectModelo " + e.target.value);
        setModelo(e.target.value);
    }  
    
    const onSelectKm = (e) => {
        console.log("onSelectKm " + e.target.value);
        setKm(e.target.value);
    }   

    const onSelectCor = (e) => {
        console.log("onSelectCor " + e.target.value);
        setCor(e.target.value);
    }  
    
    const onSelectFilial = (e) => {
        console.log("onSelectFilial " + e.target.value);
        setFilial(e.target.value);
    }   

    const onSelectDescricao = (e) => {
        console.log("onSelectDescricao " + e.target.value);
        setDescricao(e.target.value);
    }   

    const onSelectRenavam = (e) => {
        console.log("onSelectRenavam " + e.target.value);
        setRenavam(e.target.value);
    }   

    const onSelectValor = (e) => {
        console.log("onSelectValor " + e.target.value);
        setValor(e.target.value);
    } 

    
    const onSelectAno = (e) => {
        console.log("onSelectAno " + e.target.value);
        setAno(e.target.value);
    } 

    const onSelectPlaca = (e) => {
        console.log("onSelectPlaca " + e.target.value);
        setPlaca(e.target.value);
    } 

    
    
    const buscaMarcas = () => {
        console.log("entrou no buscaMarcas");
        var lst = dispatch(getListaMarcas());
        return lst
    }

    const cadastrarVeiculo = () => {
        console.log("entrou no cadastrarVeiculo");
        dispatch(createVeiculo(idMarca, idModelo, ano, idCor, km, placa, idFilial, descricao, renavam, valor));
        // return veiculo
    }

    /*Inicio da Implementação feita pelo Lucas*/
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
        /*Fim da Implementação feita pelo Lucas*/


    return (
        <CadastroView
            buscaMarcas={buscaMarcas}
            listaMarcas={listaMarcas}
            Success={Success}
            cadastrarVeiculo={cadastrarVeiculo}
            onSelectMarca={onSelectMarca}
            onSelectModelo={onSelectModelo}
            onSelectKm={onSelectKm}
            onSelectCor={onSelectCor}
            onSelectFilial={onSelectFilial}
            onSelectDescricao={onSelectDescricao}
            onSelectRenavam={onSelectRenavam}
            onSelectValor={onSelectValor}
            onSelectAno={onSelectAno}
            onSelectPlaca={onSelectPlaca} 
            buscaModelos={buscaModelos}
            Modelos={listarModelos}
            veiculo={veiculo}/>
    )

}
export default CadastroController;
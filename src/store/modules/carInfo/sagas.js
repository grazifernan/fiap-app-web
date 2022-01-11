import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import api from '../../../services/api';
import { getError, getSuccess, createVeiculoStart, createVeiculoError, createVeiculoSuccess } from './actions';

function* getMarcas() {    
    var veiculo = { listaMarcas: [], listaModelos: [], listaAno: [], listaCor: [], km: 0, placa: '', listaFiliais: [], descricao: '', isConnection: false, Success: 0
    }
    try {        
        const returnInfo = yield call(api.get, '/listarmarcas');

        if (returnInfo.data instanceof Array) {
            console.log("conteúdo do veiculo: " + veiculo);
            veiculo.listaMarcas = returnInfo.data;
            console.log("conteúdo do veiculo: " + veiculo);
            yield put(getSuccess(veiculo));
        } else {
            yield put(getError());
        } 
    }catch(err){  
        yield put(getError(err));
    }
}

function* getModelos(codMarca){
    var veiculo = { listaMarcas: [], listaModelos: [], listaAno: [], listaCor: [], km: 0, placa: '', listaFiliais: [], descricao: '', isConnection: false, Success: 0
    }

    try {        
        const returnInfo = yield call(api.get, `/listarmodelos/${codMarca.payload.param}`);

        if (returnInfo.data instanceof Array){
            veiculo.listaModelos = returnInfo.data;
            yield put(getSuccess(veiculo));
        } else {
            yield put(getError());
        } 
    }catch(err){  
        yield put(getError());
    }
}

function* getCores(){
    var veiculo = { listaMarcas: [], listaModelos: [], listaAno: [], listaCor: [], km: 0, placa: '', listaFiliais: [], descricao: '', isConnection: false, Success: 0
    }

    try {        
        const returnInfo = yield call(api.get, '/listarcores');
        if (returnInfo.data instanceof Array){
            veiculo.listaCor = returnInfo.data;
            yield put(getSuccess(veiculo));
        } else {
            yield put(getError());
        } 
    }catch(err){  
        yield put(getError());
    }
}

function* getCor(codCor){
    var veiculo = { listaMarcas: [], listaModelos: [], listaAno: [], listaCor: [], km: 0, placa: '', listaFiliais: [], descricao: '', isConnection: false, Success: 0
    }

    try {
        const returnInfo = yield call(api.get, `/buscarCor/${codCor.payload.param}`);
        if (returnInfo.data instanceof Array){
            veiculo.listaCor = returnInfo.data;
            yield put(getSuccess(veiculo));
        } else {
            yield put(getError());
        } 
    }catch(err){  
        yield put(getError());
    }
}

function* getFiliais(){
    var veiculo = { listaMarcas: [], listaModelos: [], listaAno: [], listaCor: [], km: 0, placa: '', listaFiliais: [], descricao: '', isConnection: false, Success: 0
    }

    try {        
        const returnInfo = yield call(api.get, '/listarfiliais');
        if (returnInfo.data instanceof Array){
            veiculo.listaFiliais = returnInfo.data;
            yield put(getSuccess(veiculo));
        } else {
            yield put(getError());
        } 
    }catch(err){  
        yield put(getError());
    }
}

function* getAnos(){
    var veiculo = { listaMarcas: [], listaModelos: [], listaAno: [], listaCor: [], km: 0, placa: '', listaFiliais: [], descricao: '', isConnection: false, Success: 0
    }

    try {    
        var anos = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
        veiculo.listaAno = anos
        yield put(getSuccess(veiculo));
    }catch(err){  
        yield put(getError());
    }
}

function* createVeiculo({ payload }){

    try {

        console.log("Starting Connection CreateVeiculo 1:");
        yield put(createVeiculoStart());
        console.log("Starting Connection CreateVeiculo 2:");
        const { idMarca, idModelo, ano, idCor, km, placa, idFilial, descricao, renavam, valor } = payload;
        console.log("Starting Connection CreateVeiculo 3:");
        console.log ("Payload Dados do Veiculo:" + idMarca);

       const dataBody = {
        codModelo: idModelo, 
        km: km, 
        codCor: idCor, 
        placa: placa, 
        codFilial: idFilial, 
        descricao: descricao, 
        renavam: renavam, 
        valor: valor
       };

       console.log("dados do body: " + (JSON.stringify(dataBody)));

       const returnInfo = yield call(api.post, '/cadastro', JSON.stringify(dataBody));
                                   
       console.log("Retorno API Cadastro" + JSON.stringify(returnInfo.data));

       yield put(createVeiculoSuccess(returnInfo.data));
   
    }catch(err){
        console.log("Error Call");   
        yield put(createVeiculoError());
    }

}



//Junta todos as sagas deste objeto
export default all([
    takeLatest('carInfo/GET_LISTA_MARCAS', getMarcas),
    takeLatest('carInfo/GET_LISTA_MODELOS', getModelos),
    takeLatest('carInfo/GET_LISTA_CORES', getCores),
    takeLatest('carInfo/GET_COR', getCor),
    takeLatest('carInfo/GET_LISTA_FILIAIS', getFiliais),
    takeLatest('carInfo/GET_LISTA_ANOS', getAnos),
    takeLatest('carInfo/CREATE_VEICULO', createVeiculo),
]);

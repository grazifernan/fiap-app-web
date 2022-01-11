import produce from "immer";

const INITIAL_STATE = { 
    veiculo: {
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
};

export default function carInfo(state = INITIAL_STATE, {type, payload}){

    return produce(state, (draft) => {

        switch(type) {

            case 'carInfo/GET_LISTA_MARCAS': {
                console.log("REDUCER carInfo/GET_LISTA_MARCAS");
                break;
            }
            case 'carInfo/GET_LISTA_MODELOS': {
                console.log("REDUCER carInfo/GET_LISTA_MODELOS");
                break;
            }
            case 'carInfo/GET_LISTA_CORES': {
                console.log("REDUCER carInfo/GET_LISTA_CORES");
                break;
            }
            case 'carInfo/GET_COR': {
                console.log("REDUCER carInfo/GET_COR");
                break;
            }
            case 'carInfo/GET_LISTA_FILIAIS': {
                console.log("REDUCER carInfo/GET_LISTA_FILIAIS");
                break;
            }
            case 'carInfo/GET_LISTA_ANOS': {
                console.log("REDUCER carInfo/GET_LISTA_ANOS");
                break;
            }
            case 'carInfo/GET_SUCCESS': {
                console.log("REDUCER carInfo/GET_SUCCESS");
                draft.veiculo = payload.veiculo;
                draft.veiculo.isConnection = false;
                draft.veiculo.Success = 1;
                break;
            }
            case 'carInfo/GET_ERROR': {
                console.log("REDUCER carInfo/GET_ERROR");
                draft.veiculo = [];
                draft.veiculo.isConnection = false;
                draft.veiculo.Success = 2;
                break;
            }
            case 'carInfo/CREATE_VEICULO_START': {
                console.log("REDUCER carInfo/CREATE_VEICULO_START");
                draft.veiculo.isConnection = true;
                draft.veiculo.Success = 0;
                break;            
            }
            case 'carInfo/CREATE_VEICULO_SUCCESS': {
                console.log("REDUCER carInfo/CREATE_VEICULO_SUCCESS");
                draft.veiculo.isConnection = false;
                draft.veiculo.Success = 1;
                break;
            }
            case 'carInfo/CREATE_VEICULO_ERROR': {
                console.log("REDUCER carInfo/CREATE_VEICULO_ERROR");
                draft.veiculo.isConnection = false;
                draft.veiculo.Success = 2;
                break;
            }
            case 'carInfo/CREATE_VEICULO_START': {
                console.log("REDUCER carInfo/CREATE_VEICULO_START");
                draft.veiculo.isConnection = true;
                draft.veiculo.Success = 0;
                break;            
            }
            case 'carInfo/CREATE_VEICULO_SUCCESS': {
                console.log("REDUCER carInfo/CREATE_VEICULO_SUCCESS");
                draft.veiculo.isConnection = false;
                draft.veiculo.Success = 1;
                break;
            }
            case 'carInfo/CREATE_VEICULO_ERROR': {
                console.log("REDUCER carInfo/CREATE_VEICULO_ERROR");
                draft.veiculo.isConnection = false;
                draft.veiculo.Success = 2;
                break;
            }



            default:
        }
    });
}

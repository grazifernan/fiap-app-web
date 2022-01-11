import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

//Criando um array caso precisemos de mais middlewares
const middlewares = [sagaMiddleware];

//Criando a Redux Store 
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Rodando redux-saga
sagaMiddleware.run(rootSaga);

console.log("ENTROU NO STORE");

export default store
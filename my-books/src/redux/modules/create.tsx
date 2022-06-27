import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

const create = () =>{
  const sagaMiddleware  = createSagaMiddleware();

  const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  return store;
}

export default create;
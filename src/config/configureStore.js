import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';

import rootSaga from '../store/sagas';
import reducer from '../store/reducers';
import reduxReset from 'redux-reset';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  let store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware), reduxReset()),
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
};

export default configureStore;

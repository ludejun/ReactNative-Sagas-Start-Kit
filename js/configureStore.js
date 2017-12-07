
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from './reducers';
// import promise from './promise';
import createSagaMiddleware, { END } from 'redux-saga';

export default function configureStore(onCompletion:()=>void) {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    devTools({
      name: 'reactNativeSagasStartKit', realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  // install saga run
  store.runSaga = sagaMiddleware.run; // createStoreWithMiddleware 后调用装载 自定义saga
  store.close = () => store.dispatch(END);

  return store;
}

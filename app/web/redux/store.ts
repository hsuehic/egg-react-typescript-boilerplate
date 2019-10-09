import { applyMiddleware, compose, createStore, DeepPartial } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import reducer from './reducer';

import { State } from './redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(a: R) => R;
  }
}

export function createReduxStore(
  isSSR: boolean,
  preloadState: DeepPartial<State> = {},
) {
  const composeEnhancers =
    (!isSSR && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  return createStore(
    reducer,
    preloadState,
    composeEnhancers(applyMiddleware(ThunkMiddleware)),
  );
}

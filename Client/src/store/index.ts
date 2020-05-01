import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import * as actionCreators from '../actions';
import { rootEpic } from '../epics';
import { rootReducer } from '../reducers';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = composeWithDevTools({
  actionCreators: actionCreators
});

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
};
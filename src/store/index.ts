import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actionCreators from '../actions';
import { rootReducer } from '../reducers';
import { rootEpic } from '../epics';

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
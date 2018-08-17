import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;

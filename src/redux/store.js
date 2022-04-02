//2. then a store is created applying middlewere (these middlewere run between )
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
//thunk is middle ware
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const middleware = [thunk];
if(process.env.NODE_ENV === "development"){
    middleware.push(logger);
}
export const store = createStore(rootReducer,applyMiddleware(...middleware));

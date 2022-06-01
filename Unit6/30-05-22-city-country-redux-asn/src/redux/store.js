import {legacy_createStore as createStore,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./root_reducer";

const store = createStore(rootReducer,applyMiddleware(reduxThunk)  );

export default store;
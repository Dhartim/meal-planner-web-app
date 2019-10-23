import { createStoreHook } from "react-redux";
import rootReducer from "./reducers";

export default createStoreHook(rootReducer);

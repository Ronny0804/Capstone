import { combineReducers } from "redux";
import {getInputValues, getMenuValues} from "./updown";
import {getImageValues,getbagImageValues,getTemplateValues} from "./updown";

 const rootReducer = combineReducers({
    getInputValues,getImageValues,getMenuValues,getbagImageValues,getTemplateValues
})
export default rootReducer;
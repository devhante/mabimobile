import { combineReducers } from "redux";
import itemInfo from './itemInfo';
import searchText from "./searchText";
import searchItems from "./searchItems";

const rootReducer = combineReducers({
    itemInfo,
    searchText,
    searchItems,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
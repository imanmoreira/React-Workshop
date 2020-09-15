import { combineReducers } from "redux";
import { MenuState, menuReducer } from "./menuReducer";

export interface AppState {
  menu: MenuState;
}

export const rootReducer = combineReducers({
  menu: menuReducer,
});

import { AppState } from "./reducers/state";
import { MenuItem } from "../model/types";

export const getMenuItems = (state: AppState): MenuItem[] =>
  state.menu.menuItems;

/**
 * **TODO** Task 7
 */

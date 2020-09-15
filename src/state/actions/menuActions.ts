import { createAction } from "typesafe-actions";
import { MenuItem } from "../../model/types";

export const addMenuItem = createAction(
  "menu/ADD_MENU_ITEM",
  (menuItem: MenuItem) => ({ menuItem })
)();

export const deleteMenuItems = createAction(
  "menu/DELETE_MENU_ITEM",
  (menuItems: MenuItem[]) => ({ menuItems })
)();

/**
 * **TODO** Task 6
 */

import { createAction } from "typesafe-actions";
import { MenuItem } from "../../model/types";

export const addMenuItem = createAction(
  "menu/ADD_MENU_ITEM",
  (menuItem: MenuItem) => ({ menuItem })
)();

export const removeMenuItem = createAction(
  "menu/REMOVE_MENU_ITEM",
  (menuItem: MenuItem) => ({ menuItem })
)();

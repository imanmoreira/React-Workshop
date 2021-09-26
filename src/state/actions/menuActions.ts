import { createAction } from "typesafe-actions";
import { MenuItem } from "../../model/types";

export const addMenuItem = createAction(
  "menu/ADD_MENU_ITEM",
  (menuItem: MenuItem) => ({ menuItem })
)();

export const deleteMenuItems = createAction(
  "menu/DELETE_MENU_ITEM",
  (deleteItems: MenuItem[]) => ({ deleteItems })
)();
export const placeOrder = createAction(
  "menu/PLACE_ORDER",
  (name: string, order: MenuItem[]) => ({ name, order })
)();

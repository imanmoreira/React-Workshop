import { MenuItem } from "../../model/types";
import { MenuAction } from "../actions/";
import produce from "immer";
import { getType } from "typesafe-actions";
import { addMenuItem, deleteMenuItems } from "../actions/menuActions";

/**
 * **TODO** Task 6
 */

export interface MenuState {
  menuItems: MenuItem[];
}

const initialState: MenuState = {
  menuItems: [
    { name: "coffee", price: 10 },
    { name: "cookie", price: 12 },
  ],
};

export const menuReducer = (
  state: MenuState = initialState,
  action: MenuAction
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case getType(addMenuItem): {
        const { menuItem } = action.payload;
        draft.menuItems.push(menuItem);

        return draft;
      }
      case getType(deleteMenuItems): {
        /**
         * **TODO** Task 5
         */
      }
    }
  });
};

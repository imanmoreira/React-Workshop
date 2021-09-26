import { MenuItem } from "../../model/types";
import { MenuAction } from "../actions/";
import produce from "immer";
import { getType } from "typesafe-actions";
import {
  addMenuItem,
  deleteMenuItems,
  placeOrder,
} from "../actions/menuActions";

export interface MenuState {
  menuItems: MenuItem[];
  customerOrders: { name: string; order: MenuItem[] }[];
}

const initialState: MenuState = {
  menuItems: [
    { name: "coffee", price: 10 },
    { name: "cookie", price: 12 },
  ],
  customerOrders: [],
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
        const { deleteItems } = action.payload;
        draft.menuItems.filter(
          (item: MenuItem) =>
            !deleteItems.reduce((acc, i) => i.name === item.name || acc, false)
        );
        return draft;
      }
      case getType(placeOrder): {
        const { name, order } = action.payload;
        draft.customerOrders.push({ name, order });
        return draft;
      }
    }
  });
};

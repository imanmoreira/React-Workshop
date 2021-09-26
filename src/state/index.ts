import { AppState } from "./reducers/state";
import { MenuItem } from "../model/types";

export const getMenuItems = (state: AppState): MenuItem[] =>
  state.menu.menuItems;

export const getCustomerOrders = (
  state: AppState
): { name: string; order: MenuItem[] }[] => state.menu.customerOrders;

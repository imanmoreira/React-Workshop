import { combineReducers } from "redux";
// import { userReducer, UserState } from "./userReducer";
// import { SchedulesState, schedulesReducer } from "./schedulesReducer";
import { MenuState, menuReducer } from "./menuReducer";
// import {
//   MajorApiState,
//   PlansApiState,
//   majorsReducer,
//   plansReducer,
// } from "./apiReducer";

export interface AppState {
  menu: MenuState;
  // user: UserState;
  // majorState: MajorApiState;
  // plansState: PlansApiState;
  // schedules: SchedulesState;
}

export const rootReducer = combineReducers({
  menu: menuReducer,
  // user: userReducer,
  // majorState: majorsReducer,
  // plansState: plansReducer,
  // schedules: schedulesReducer,
});

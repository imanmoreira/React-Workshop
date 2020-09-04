import { combineReducers } from "redux";
// import { userReducer, UserState } from "./userReducer";
// import { SchedulesState, schedulesReducer } from "./schedulesReducer";
// import { ScheduleState, scheduleReducer } from "./scheduleReducer";
// import {
//   MajorApiState,
//   PlansApiState,
//   majorsReducer,
//   plansReducer,
// } from "./apiReducer";

export interface AppState {
  // schedule: ScheduleState;
  // user: UserState;
  // majorState: MajorApiState;
  // plansState: PlansApiState;
  // schedules: SchedulesState;
}

export const rootReducer = combineReducers({
  // schedule: scheduleReducer,
  // user: userReducer,
  // majorState: majorsReducer,
  // plansState: plansReducer,
  // schedules: schedulesReducer,
});

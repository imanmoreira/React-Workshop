import * as menuActions from "./menuActions";
import { ActionType } from "typesafe-actions";

export type MenuAction = ActionType<typeof menuActions>;

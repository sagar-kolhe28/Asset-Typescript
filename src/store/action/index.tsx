import { ActionType } from "../constant/constant";

interface SetUser_info {
  type: ActionType.SET_USER_INFO;
  payload: string[];
}

export type Action = SetUser_info;

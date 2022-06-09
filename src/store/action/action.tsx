import { ActionType } from "../constant/constant";
import { Dispatch } from "redux";

interface userInfoAction {
  type: ActionType.SET_USER_INFO;
  payload: string;
}

export function setUserInfoAction(userInfoData: string[]) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.SET_USER_INFO,
      payload: userInfoData,
    });
  };
}

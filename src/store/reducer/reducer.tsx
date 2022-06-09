import { ActionType } from "../constant/constant";

interface UserState {
  userInfo: string[];
}
const INITIAL_STATE = {
  userInfo: [],
};

type Action = { type: "SET_USER_INFO"; payload?: string[] };

const reducer = (states: UserState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.SET_USER_INFO:
      return {
        ...states,
        userInfo: action.payload,
      };
    default:
      return states;
  }
};

export default reducer;

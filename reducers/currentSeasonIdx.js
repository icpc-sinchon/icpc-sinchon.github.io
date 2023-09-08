import { HYDRATE } from "next-redux-wrapper";
import suapcList from "../public/history/suapc/list.json";

export const SET_IDX = "SET_IDX";
export const setCurrentSeasonIdx = (val) => ({
  type: SET_IDX,
  val,
});

const reducer = (
  state = suapcList.indexOf(process.env.NEXT_PUBLIC_CURRENT_SUAPC_SEASON),
  action,
) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.currentSeasonIdx;
    case SET_IDX:
      return action.val;
    default:
      return state;
  }
};

export default reducer;

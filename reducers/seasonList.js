import { HYDRATE } from "next-redux-wrapper";

export const SET_SL = "SET_SL";
export const setSeasonList = (val) => ({
  type: SET_SL,
  val,
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.seasonList;
    case SET_SL:
      return action.val;
    default:
      return state;
  }
};

export default reducer;

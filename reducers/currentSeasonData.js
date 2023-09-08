import { HYDRATE } from "next-redux-wrapper";
const seasonData = require(
  `../public/history/suapc/${process.env.NEXT_PUBLIC_CURRENT_SUAPC_SEASON}.json`,
);

export const SET_SD = "SET_SD";
export const setCurrentSeasonData = (val) => ({
  type: SET_SD,
  val,
});

const reducer = (state = seasonData, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.currentSeasonData;
    case SET_SD:
      return action.val;
    default:
      return state;
  }
};

export default reducer;

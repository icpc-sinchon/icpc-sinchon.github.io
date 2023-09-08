import { HYDRATE } from "next-redux-wrapper";
const currentSeasonData = require("../public/history/suapc/2021 Winter.json");

export const SET_Y = "SET_YEAR";
export const setCurrentYear = (val) => ({
  type: SET_Y,
  val,
});

const reducer = (state = currentSeasonData.year, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.currentYear;
    case SET_Y:
      return action.val;
    default:
      return state;
  }
};

export default reducer;

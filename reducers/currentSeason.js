import { HYDRATE } from "next-redux-wrapper";
const currentSeasonData = require("../public/history/suapc/2021 Winter.json");

export const SET_SEASON = "SET_SEASON";
export const setCurrentSeason = (val) => ({
  type: SET_SEASON,
  val,
});

const reducer = (state = currentSeasonData.season, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.currentSeason;
    case SET_SEASON:
      return action.val;
    default:
      return state;
  }
};

export default reducer;

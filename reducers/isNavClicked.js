import { HYDRATE } from "next-redux-wrapper";

export const SET_NAV_CLICK = "SET_NAV_CLICK";
export const setIsNavClicked = (val) => ({
  type: SET_NAV_CLICK,
  val,
});

const reducer = (state = false, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.isNavClicked;
    case SET_NAV_CLICK:
      return action.val;
    default:
      return state;
  }
};

export default reducer;

import { useSelector } from "react-redux"
const currentSeasonData = require('../public/history/suapc/2021 Winter.json')


export const setS = `SET_SEASON`
export const setCurrentSeason = (season) => ({
    type: setS,
    val: season
})

const reducer = (state = currentSeasonData.season, action) => {
    if (action.type === setS) {
        return action.val
    } else {
        return state
    }
}

export default reducer
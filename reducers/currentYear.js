import { useSelector } from "react-redux"

const currentSeasonData = require('../public/history/suapc/2021 Winter.json')


export const setY = `SET_YEAR`
export const setCurrentYear = (year) => ({
    type: setY,
    val: year
})

const reducer = (state = currentSeasonData.year, action) => {
    if (action.type === setY) {
        return action.val
    } else {
        return state
    }
}

export default reducer
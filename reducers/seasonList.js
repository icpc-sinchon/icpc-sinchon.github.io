import seasonList from '../public/history/halloffame/list.json'

export const SET_SL = `SET_SL`
export const setSeasonList = (seasonList) => ({
    type: SET_SL,
    val: seasonList
})

const reducer = (state = seasonList, action) => {
    if (action.type === SET_SL)
        return action.val
    else
        return state
}

export default reducer
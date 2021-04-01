import suapcList from '../public/history/suapc/list.json'


export const setIdx = `SET_IDX`
export const setCurrentSeasonIdx = (idx) => ({
    type: setIdx,
    val: idx
})

const reducer = (state = suapcList.indexOf(process.env.NEXT_PUBLIC_CURRENT_SUAPC_SEASON), action) => {
    if (action.type === setIdx) {
        return action.val
    } else {
        return state
    }
}

export default reducer
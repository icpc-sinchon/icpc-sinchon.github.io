// import seasonData from '../public/history/suapc/2021 Winter.json'
const seasonData = require(`../public/history/suapc/${process.env.NEXT_PUBLIC_CURRENT_SUAPC_SEASON}.json`)


export const setSD = `SET_SD`
export const setCurrentSeasonData = (data) => ({
    type: setSD,
    data: data
})

const reducer = (state = seasonData, action) => {
    switch(action.type){
        case setSD:
            return action.data
        default:
            return state
    }
}

export default reducer
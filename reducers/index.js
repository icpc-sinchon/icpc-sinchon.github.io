import { combineReducers } from 'redux'
import currentSeasonIdx from './currentSeasonIdx'
import currentSeasonData from './currentSeasonData'
import seasonList from './seasonList'
import currentYear from './currentYear'
import currentSeason from './currentSeason'


const rootReducer = combineReducers({
    currentSeasonIdx, currentSeasonData, seasonList, currentYear, currentSeason
})

export default rootReducer;
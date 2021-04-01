import { combineReducers } from 'redux'
import currentSeasonIdx from './currentSeasonIdx'
import currentSeasonData from './currentSeasonData'
import seasonList from './seasonList'
import currentYear from './currentYear'


const rootReducer = combineReducers({
    currentSeasonIdx, currentSeasonData, seasonList, currentYear
})

export default rootReducer;
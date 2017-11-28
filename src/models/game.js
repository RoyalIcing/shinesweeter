import times from 'lodash/times'
import { tileBombStates, tileUserStates } from './values'

export const initial = ({
  columns = 9,
  rows = 9,
  bombOdds = 0.1
}) => ({
  board: times(rows, () => (
    times(columns, () => ({
      bombState: Math.random() <= bombOdds ? tileBombStates.bomb : tileBombStates.blank,
      userState: tileUserStates.none
    }))
  ))
})
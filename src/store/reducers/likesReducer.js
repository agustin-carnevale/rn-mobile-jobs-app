import {LIKE_JOB, CLEAR_LIKED_JOBS} from '../actions/types'
import _ from 'lodash'

export default (state= [],action)=>{
    switch (action.type){
        case LIKE_JOB:
            return _.uniqBy([...state, action.payload],'id')
        case CLEAR_LIKED_JOBS:
            return []
        default:
            return state
    }
}
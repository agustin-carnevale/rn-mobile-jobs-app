//import indeedAPI from '../../api/indeedAPI'
import axios from 'axios'
import {FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS} from './types'
import qs from 'qs'
import * as Location from 'expo-location'

const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';
const JOB_QUERY_PARAMS = {
  description: 'javascript',
  full_time: true
};

export const fetchJobs = (region, callback) => async dispatch =>{
    try {
        const zip = await Location.reverseGeocodeAsync(region)
        const query = qs.stringify({...JOB_QUERY_PARAMS, location: zip})
        const url = `${JOB_ROOT_URL}${query}`
        const {data} = await axios.get(url)
        dispatch({type: FETCH_JOBS, payload: data})
        callback()
    } catch (error) {
        console.error(error)
    }
}

export const likeJob = (job) => dispatch =>{
    dispatch({
        type: LIKE_JOB,
        payload: job
    })
}

export const clearLikedJobs = () => dispatch =>{
    dispatch({
        type: CLEAR_LIKED_JOBS,
    })
}


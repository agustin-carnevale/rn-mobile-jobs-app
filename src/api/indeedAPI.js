import axios from 'axios'

const instance =  axios.create({
    baseURL:'http://api.indeed.com'
})

export default instance
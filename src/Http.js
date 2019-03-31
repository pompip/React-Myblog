import axios from 'axios'

export default  axios.create({
    baseURL: "http://localhost/api",
    timeout: 5000,
    headers: {}
})
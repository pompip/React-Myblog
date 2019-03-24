import axios from 'axios'

export default  axios.create({
    baseURL: "http://java.asuscomm.com",
    timeout: 5000,
    headers: {}
})
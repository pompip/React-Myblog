import axios from 'axios'

export default  axios.create({
    baseURL: "http://java.asuscomm.com:9000/api",
    timeout: 5000,
   
})
import axios from './httpClient'

export default {
    sales() {
        return axios.post('/car/sales')
    },
    week(){
        return axios.post('/car/week')
    },
    year(){
        return axios.post('/car/year')
    }
}

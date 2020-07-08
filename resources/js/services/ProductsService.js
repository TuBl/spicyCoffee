import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api'
})

export default {
    getProducts() {
        return apiClient.get('/products')
    },
    // getMatchups(id) {
    //     return apiClient.get(`/matchup/${id}`)
    // }
}

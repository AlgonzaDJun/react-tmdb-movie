import axios from 'axios'

const API_KEY = '2e168b3b879ec814fa52ec1be986b659';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
    baseURL: baseUrl,
    params : {
        api_key: API_KEY,
    },
})

export default tmdb;

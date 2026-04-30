import axios from "axios";

const api = axios.create({
    
    baseURL: 'http://www.omdbapi.com/?apikey=861cbfa7&'
});

export default api;
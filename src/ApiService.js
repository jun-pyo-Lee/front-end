import axios from 'axios';

const NEWS_API_BASE_URL = "http://localhost:8080/home";

class ApiService{
    fetchNewses(){
        return axios.get(NEWS_API_BASE_URL);
    }
}
export default new ApiService();
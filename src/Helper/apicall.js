import axios from 'axios';

export const API_BASE_URL = `http://3.108.129.119:8080`
// 'http://3.108.129.119:3011';  
const apiCall = async (method, endpoint, data = null, params = null) => {
    try {
        const token = localStorage.getItem('token');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios({
            method,
            url: `${API_BASE_URL}${endpoint}`,
            data,
            params,
            headers,
        });
        console.log("resolve11", response);
        return response.data;
    } catch (error) {
        console.error('API Call Error:', error.message);
        throw error;
    }
};
export default apiCall;
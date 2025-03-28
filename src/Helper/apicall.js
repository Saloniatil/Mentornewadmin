import axios from 'axios';

export const API_BASE_URL = 'https://g70bg47x-3010.inc1.devtunnels.ms';  
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
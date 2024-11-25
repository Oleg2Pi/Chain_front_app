import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

export const fetchUsers = () => api.get('/person');
export const fetchUserByChatId = (chatId) => api.get(`/person/${chatId}`);

export default api;

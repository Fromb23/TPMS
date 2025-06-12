import apiClient from "../api/api";

export const login = async (email, password) => {
    try {
        const response = await apiClient.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        throw new Error (error.response?.data?.error || 'Something went wrong');
    }
}
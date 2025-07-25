import apiClient from "../api/api";

export const login = async ({ email, password }) => {
    try {
        const response = await apiClient.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        let message = 'Something went wrong';

        if (error.response?.data?.message) {
            message = error.response.data.message;
        } else if (error.message === 'Network Error') {
            message = 'Network error, please try again later';
        }
        throw new Error(message);
    }
}

export const verifyUserEmail = async (email) => {
    try {
        const response = await apiClient.post('/auth/verify-email', { email });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Something went wrong');
    }
}

export const resetUserPassword = async ({ password }) => {
    const { token } = JSON.parse(localStorage.getItem('user')) || {};
    if (!token) {
        throw new Error('User is not authenticated');
    }
    try {
        const response = await apiClient.post('/auth/reset-password', { password },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Something went wrong');
    }
}
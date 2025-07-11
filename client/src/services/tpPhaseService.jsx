import apiClient from '../api/api';

export const getCurrentPhase = async (userId, token) => {
  try {
    if (!token) throw new Error('Authentication token not found');
    
    const response = await apiClient.get(`/auth/tpPhase/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching current phase:', error);
    throw error;
  }
};

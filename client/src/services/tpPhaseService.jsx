import apiClient from '../api/api';

export const getCurrentPhase = async (userId) => {
	const token = localStorage.getItem('token')
  try {
    if (!token) throw new Error('Authentication token not found');

	console.log("Fetching current phase for userId:", token)

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

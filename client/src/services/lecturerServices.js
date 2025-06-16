import apiClient from '../api/api';

export const fetchAllLecturers = async () => {
    const token = localStorage.getItem('token');
  try {
    const response = await apiClient.get('/lecturers', {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching all lecturers:', error);
    throw error;
  }
}
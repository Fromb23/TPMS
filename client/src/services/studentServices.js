import apiClient from '../api/api';

const token = localStorage.getItem('token');


export const fetchAllStudents = async () => {
  try {
    const response = await apiClient.get('/students', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
}

export const fetchStudentByLecturerId = async (lecturerId) => {
  try {
    const response = await apiClient.get(`/students/lecturer/${lecturerId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students by lecturer ID:', error);
    throw error;
  }
} 
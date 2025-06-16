import apiClient from '../api/api';

export const fetchStudentByLecturerId = async (lecturerId) => {
  try {
    const response = await apiClient.get(`/students/lecturer/${lecturerId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching students by lecturer ID:', error);
    throw error;
  }
} 
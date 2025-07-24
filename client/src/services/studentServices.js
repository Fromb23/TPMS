import apiClient from '../api/api';

const token = localStorage.getItem('token');


export const fetchAllStudents = async (token) => {
  if (!token) {
    throw new Error("Authentication token is required");
  }
  console.log("Fetching all students with token:", token);

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

export const updateStudentStatusById = async ({ id, ...status }) => {
  try {
    const response = await apiClient.put(`/students/${id}/status`, status, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating student status:', error);
    throw error;
  }
};

export const getStudentById = async (studentId) => {
  console.log("STudent id called", studentId);
  try {
    const response = await apiClient.get(`/students/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching student by ID:', error);
    throw error;
  }
}

export const fetchStudentsByZone = async (token) => {
  if (!token) {
    throw new Error("Authentication token is required");
  }

  try {
    const response = await apiClient.get('/students/zone', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching students by zone:', error);
    throw error;
  }
}
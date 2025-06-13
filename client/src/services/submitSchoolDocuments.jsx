import apiClient from '../api/api';

export const submitSchoolDocuments = async ({ userId, schoolData, files }) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error("No token found");

    const formData = new FormData();

    formData.append("schoolData", JSON.stringify(schoolData));


    files.forEach((file) => {
      formData.append("files", file);
    });

    const response = await apiClient.post('/documents/create/school-documents', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to submit school documents:", error.message || error);
    throw error;
  }
};

export const getDocumentStatusByUserId = async (userId) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error("No token found");

    const response = await apiClient.get(`/documents/status/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to get document status:", error.message || error);
    throw error;
  }
}

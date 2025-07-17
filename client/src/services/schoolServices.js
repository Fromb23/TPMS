import apiClient from '../api/api';

export const fetchSchools = async (token) => {
  try {
    const response = await apiClient.get("/schools", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch schools:", error.message || error);
    throw error;
  }
};

export const createSchool = async ({form, token}) => {
  try {
    if (!token) throw new Error("No token found");
    const response = await apiClient.post('/schools', form, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create school:", error.message || error);
    throw error;
  }
};

export const submitSchoolDocuments = async ({ schoolData, files, token }) => {
  try {
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

export const getDocumentStatusByUserId = async (userId, token) => {
  try {
    if (!token) throw new Error("No token found");

    const response = await apiClient.get(`/documents/status/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to get document status:", error.message || error);
    throw error;
  }
}

export const fetchSchoolDataByStudentId = async (userId) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const response = await apiClient.get(`/schools/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch school data:", error.message || error);
    throw error;
  }
}

export const updateRegisteredSchool = async ({ form, token }) => {
  try {
    if (!token) throw new Error("No token found");

    const response = await apiClient.put(`/schools/${form.id}`, form, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to update school:", error.message || error);
    throw error;
  }
}

export const deleteRegisteredSchool = async ({schoolId, token}) => {
  try {
    if (!token) throw new Error("No token found");

    const response = await apiClient.delete(`/schools/${schoolId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to delete school:", error.message || error);
    throw error;
  }
}
import apiClient from "../api/api";

const token = localStorage.getItem("token");

export const createSupervisionSchedule = async (payload) => {
   try {
     const response = await apiClient.post("/supervision", payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    return response.data;
   } catch (error) {
     console.error("Error creating supervision:", error);
     throw error;
   }
}

export const deleteSupervisionSchedule = async (supervisionId) => {
  try {
    const response = await apiClient.delete(`/supervision/${supervisionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting supervision:", error);
    throw error;
  }
}

export const fetchSupervisionSchedule = async (studentId) => {
  try {
    const response = await apiClient.get(`/supervision/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching supervision schedule:", error);
    throw error;
  }
}
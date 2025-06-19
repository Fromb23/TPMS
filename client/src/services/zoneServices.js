import apiClient from "../api/api";

export const createNewZone = async (zoneData) => {
    const token = localStorage.getItem("token");
  try {
    const response = await apiClient.post("/zones", zoneData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating new zone:", error);
    throw error;
  }
}

export const fetchAllZones = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await apiClient.get("/zones", {
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching all zones:", error);
    throw error;
  }
}
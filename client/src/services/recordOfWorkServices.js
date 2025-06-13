import apiClient from "../api/api";

export const submitRecordOfWork = async (recordData) => {

    const token = localStorage.getItem('token');
    console.log("Submitting Record of Work with data:", recordData);
    try {
        const response = await apiClient.post('/record-of-work/create', recordData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error submitting Record of Work:", error);
        throw error;
    }
}

export const fetchRecordOfWorkStatusToday = async () => {
    const token = localStorage.getItem('token');
    console.log("Fetching Record of Work status for today");
    try {
        const response = await apiClient.get('/record-of-work/check-today', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Record of Work status:", error);
        throw error;
    }
}
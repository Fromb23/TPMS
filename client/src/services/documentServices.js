import apiClient from "../api/api";

const token = localStorage.getItem('token')

// export const fetchAllDocuments = async () => {

//     try {
//         const response = await apiClient.get('/documents', {
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//         },
//     })

//     return response.data;
//     } catch (error) {
//         console.error("Error occurred fetching documents: ", error);
//         throw error;
//     }
// }

export const updateDocumentStatus = async ({ documentId, status }) => {
  const response = await apiClient.patch(
    `/documents/${documentId}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

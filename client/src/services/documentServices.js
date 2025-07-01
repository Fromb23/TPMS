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

export const updateDocumentStatus = async ({ documentId, status, isFinal }) => {
  const endpoint = isFinal
    ? `/documents/${documentId}/final-doc-update`
    : `/documents/${documentId}/status`;

  try {
    console.log("Sending to endpoint:", endpoint, "with status:", status);

    const response = await apiClient.patch(
      endpoint,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update document status:", error);
    throw error;
  }
};


export const submitFinalTPDocument = async ({ userId, title, content, file }) => {
  try {


    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);

    const response = await apiClient.post('/documents/final-tp', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error submitting final TP document:", error.message || error);
    throw error;
  }
};
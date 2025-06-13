import apiClient from "../api/api";

export const submitLessonPlan = async (lessonData) => {
  try {
    console.log("Submitting lesson plan with data:", lessonData);

    const token = localStorage.getItem('token');

    const response = await apiClient.post(
      '/lesson-plans/create',
      lessonData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error submitting lesson plan:", error);
    throw error;
  }
};


export const fetchLessonPlanStatusToday = async (userId) => {
  const token = localStorage.getItem('token');
  const res = await apiClient.get(`/lesson-plans/check-today`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { userId },
  });
  return res.data;  // returns { hasSubmitted: true }
};

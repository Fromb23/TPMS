import { getStudentDetailsById } from './student.controller.js';
import { determinePhase } from '../services/tpPhase.service.js';

export const getCurrentPhase = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const student = await getStudentDetailsById(userId);
    const phase = determinePhase(student);
    res.status(200).json({ phase });
  } catch (error) {
    console.error("Error determining current phase:", error);
    res.status(500).json({ message: "Failed to determine current phase" });
  }
};

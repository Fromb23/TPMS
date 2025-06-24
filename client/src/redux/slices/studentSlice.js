import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    selectedStudentId: null,
  },
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    updateStudentInStore: (state, action) => {
      state.students = state.students.map(s =>
        s.user.id === action.payload.user.id ? action.payload : s
      );
    },
    setSelectedStudent: (state, action) => {
      state.selectedStudentId = action.payload;
    }
  }
});

export const { setStudents, updateStudentInStore, setSelectedStudent } = studentSlice.actions;
export default studentSlice.reducer;

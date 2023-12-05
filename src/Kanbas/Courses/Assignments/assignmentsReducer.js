import { createSlice } from "@reduxjs/toolkit";

export const defaultAssignment = { title: "New Assignment 123", description: "New Description" };

const initialState = {
  assignments: [],
  assignment: defaultAssignment,
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload ? {...action.payload} : defaultAssignment;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment,setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

export const PersonalSlice = createSlice({
  name: "personal",
  initialState: {
    Name: "",
    Email: "",
    Skills: "",
  },
  reducers: {
    Name(state, { payload }) {
      state.Name = payload.name;
    },
    Email(state, { payload }) {
      state.Email = payload.email;
    },
    Skill(state, { payload }) {
      state.Skills = payload.skill;
    },
  },
});

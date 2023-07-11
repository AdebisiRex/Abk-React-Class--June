import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: { name: "", interests: "_" },
  reducers:{
    addInterest(state, action){
      console.log({state, action})
      state.name = action.payload.name
      state.interests = "Coding"

    },
  }
});

export const {addInterest } = userSlice.actions

let userReducer = userSlice.reducer
export default userReducer
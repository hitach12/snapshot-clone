import { createSlice } from '@reduxjs/toolkit';



export const appSlice = createSlice({
  name: 'app',
  initialState:{
    user:null,
    selectedImage:null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state,action) => {
    
      state.user =action.payload
    },
    logout: (state) => {
    
      state.user =null
    },
    SelectImage: (state,action) => {
    
      state.selectedImage =action.payload
    },
    ResetImage: (state) => {
    
      state.selectedImage =null
    },
  },
 
  
});

export const { login,  logout , SelectImage ,ResetImage} = appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectImage = (state) => state.app.selectedImage;

export default appSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import User from "../Api/User";

export const getProfile = createAsyncThunk(
  'user/Profile',
  async (id, { rejectWithValue }) => {
    try {
      const response = await User.getProfile();
      return response.data;
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const login = createAsyncThunk(
  'user/Login',
  async ({credential, reset}, { rejectWithValue }) => {
    try {
      await Admin.login(credential);
      reset()
      const response = await User.getProfile()
      console.log(response);
      return response.data
      
    } catch(error) {
      reset()
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const logout = createAsyncThunk(
  'user/Logout',
  async (id, { rejectWithValue }) => {
    try {
      const response = await User.logout()
      return response.data
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
    
  }
)


export const UserSlice = createSlice({
    name: 'user',
    initialState: {
      profile: null,
      error: null
    },
    reducers: {
      
    },
    extraReducers: (builder) => {
      builder.addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        return state;
      })
      builder.addCase(getProfile.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error.message
        }
        state.profile = null;
        return state;
      })
      builder.addCase(login.fulfilled, (state, action) => {
        console.log('payload', action.payload)
        state.profile = action.payload;
        return state;
      })
      builder.addCase(login.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error.message
        }
        state.profile = null;
        return state;
      })
    },
  })
  
  export default UserSlice.reducer;
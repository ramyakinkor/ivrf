import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import User from "../Api/User";
import { useRouter } from "next/router";


// const router = useRouter();
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
      await User.login(credential);
      reset()
      const response = await User.getProfile()
      // router.push('/')
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
      const response = await User.logout();
      // router.push('/')
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
      .addCase(getProfile.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error.message
        }
        state.profile = null;
        return state;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log('payload', action.payload)
        state.profile = action.payload;
        return state;
      })
      .addCase(login.rejected, (state, action) => {
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
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import authService from "./authServices";

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const sendOTP = createAsyncThunk(
  "auth/send-otp",
  async (email, thunkAPI) => {
    try {
      return await authService.sendOTP(email);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "auth/verify-otp",
  async (data, thunkAPI) => {
    try {
      return await authService.verifyOTP(data.email, data.otp);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteNotVerifiedUser = createAsyncThunk(
  "auth/delete-not-verified",
  async (id, thunkAPI) => {
    try {
      return await authService.deleteNotVerified(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/change-password",
  async (data, thunkAPI) => {
    try {
      return await authService.changePassword(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (email, thunkAPI) => {
    try {
      return await authService.logout(email);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refresh-token",
  async (thunkAPI) => {
    try {
      return await authService.refreshToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetAuthState = createAction("auth/resetState");

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })

      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.registeredUser = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(sendOTP.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendOTP.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(sendOTP.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.isVerified = true;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isVerified = false;
        state.isLoading = false;
      })
      .addCase(deleteNotVerifiedUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNotVerifiedUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(deleteNotVerifiedUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(refreshToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
        state.orders = [];
        state.message = "success";
      })
      .addCase(logout.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.error;
      })
      .addCase(resetAuthState, (state) => {
        return initialState;
      });
  },
});

export default authSlice.reducer;

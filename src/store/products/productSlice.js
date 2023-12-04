import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "fetch-all-products",
  async (apiUrl) => {
    try {
      const fullUrl = window.location.origin.replace(":3000", ":3001") + apiUrl;
      const response = await fetch(fullUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { data: [], fetchStatus: "", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = "success";
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.fetchStatus = "error";
        state.error = action.error;
      });
  },
});

export default productSlice;

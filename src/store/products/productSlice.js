import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "fetch-all-products",
  async (apiUrl) => {
    const fullUrl = window.location.origin.replace(":3000", ":3001") + apiUrl;
    const responce = await fetch(fullUrl);
    return responce.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { data: [], fetchStatus: "" },
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
      .addCase(fetchAllProducts.rejected, (state) => {
        state.fetchStatus = "error";
      });
  },
});

export default productSlice;

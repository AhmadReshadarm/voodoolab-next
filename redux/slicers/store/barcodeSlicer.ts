import { TBarcodeState, TFiltersBarcode } from 'redux/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Barcode, BarcodeService } from 'swagger/services';
import { getErrorMassage, handleError, handlePending } from 'common/helpers';

export const fetchBarcodes = createAsyncThunk<
  Barcode[],
  TFiltersBarcode,
  { rejectValue: string }
>(
  'catalog/fetchBarcodes',
  async function (payload, { rejectWithValue }): Promise<any> {
    try {
      const response = await BarcodeService.getBarcodes({
        ...payload,
      });
      return response.rows;
    } catch (error: any) {
      return rejectWithValue(getErrorMassage(error.response.status));
    }
  },
);

export const fetchBarcode = createAsyncThunk<
  Barcode,
  { code: string },
  { rejectValue: number }
>(
  'catalog/fetchBarcode',
  async function (payload, { rejectWithValue }): Promise<any> {
    try {
      const response = await BarcodeService.findByBarcode({
        ...payload,
      });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  },
);

const initialState: TBarcodeState = {
  barcodes: [],
  barcode: null,
  loading: false,
  error: null,
};

const barcodeSlicer = createSlice({
  name: 'barcode',
  initialState,
  reducers: {
    // clearSubCategories(state) {
    //   state.subCategories = initialState.subCategories;
    // },
    // clearBrands(state) {
    //   state.brands = initialState.brands;
    // },
    // clearColors(state) {
    //   state.colors = initialState.colors;
    // },
    // clearTags(state) {
    //   state.tags = initialState.tags;
    // },
    // clearSizes(state) {
    //   state.sizes = initialState.sizes;
    // },
    // setPage(state, action) {
    //   state.page = action.payload;
    // },
    clearBarcodes(state) {
      state.barcodes = initialState.barcodes;
    },
    clearError(state) {
      state.error = initialState.error;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchBarcodes
      .addCase(fetchBarcodes.pending, handlePending)
      .addCase(fetchBarcodes.fulfilled, (state, action) => {
        state.barcodes = action.payload;
        state.loading = false;
      })
      .addCase(fetchBarcodes.rejected, handleError)
      // fetchBarcode
      .addCase(fetchBarcode.pending, handlePending)
      .addCase(fetchBarcode.fulfilled, (state, action) => {
        state.barcode = action.payload;
        state.error = 200;
        state.loading = false;
      })
      .addCase(fetchBarcode.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});
export const { clearError, clearBarcodes } = barcodeSlicer.actions;
export default barcodeSlicer.reducer;

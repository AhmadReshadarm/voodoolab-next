import { TBarcodeState, TFiltersBarcode } from 'redux/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Barcode, BarcodeService } from 'swagger/services';
import {
  getErrorMassage,
  handleChangePending,
  handleError,
  handlePending,
} from '../../../common/helpers';
import { openSuccessNotification } from 'common/helpers/openSuccessNotidication.helper';
import { handlePaginationDataFormatter } from 'redux/helpers';
import ExcelJs from 'exceljs';
import { handleDateFormatter } from 'common/helpers/handleDateFormatter';

export const fetchBarcodes = createAsyncThunk<
  Barcode[],
  TFiltersBarcode,
  { rejectValue: string }
>(
  'catalog/fetchBarcodes',
  async function (payload, { rejectWithValue }): Promise<any> {
    try {
      return await BarcodeService.getBarcodes({
        ...payload,
      });
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

export const generateCode = createAsyncThunk<
  Barcode[],
  { startsWith: string; barcodeLenght: number },
  { rejectValue: number }
>(
  'catalog/generateCode',
  async function (payload, { rejectWithValue }): Promise<any> {
    try {
      const response = await BarcodeService.autoGenerateBarcode({
        body: payload,
      });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.status);
    }
  },
);

export const fetchCodeInExcelFile = createAsyncThunk<
  any,
  TFiltersBarcode,
  { rejectValue: string }
>(
  'tags/fetchCodeInExcelFile',
  async function (payload, { rejectWithValue }): Promise<any> {
    try {
      const response = await BarcodeService.getBarcodes({
        ...payload,
      });
      let workBook = new ExcelJs.Workbook();
      const sheet = workBook.addWorksheet('code');
      sheet.columns = [
        { header: 'ID', key: 'id', width: 10 },
        { header: 'Код', key: 'code', width: 50 },
        { header: 'Проверено', key: 'checked', width: 30 },
        { header: 'Прилавок', key: 'counter', width: 30 },
        { header: 'Дата создания', key: 'dateCreated', width: 50 },
        { header: 'Дата изменения', key: 'dateUpdated', width: 50 },
      ];

      await response?.rows!.map((code) => {
        sheet.addRow({
          id: code.id,
          code: code.code,
          checked: code.checked ? 'Да' : 'Нет',
          counter: code.counter,
          dateCreated: handleDateFormatter(code.createdAt!),
          dateUpdated: handleDateFormatter(code.updatedAt!),
        });
      });

      workBook.xlsx.writeBuffer().then((data) => {
        const blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `${new Date().toISOString().split('T')[0]}.xlsx`;
        anchor.click();
        window.URL.revokeObjectURL(url);
      });
    } catch (error: any) {
      return rejectWithValue(getErrorMassage(error.response.status));
    }
  },
);

export const fetchCodeInJsonFile = createAsyncThunk<
  any,
  TFiltersBarcode,
  { rejectValue: string }
>(
  'tags/fetchCodeInJsonFile',
  async function (payload, { rejectWithValue }): Promise<any> {
    try {
      const response = await BarcodeService.getBarcodes({
        ...payload,
      });
      const json = JSON.stringify(response);
      const blob = new Blob([json], {
        type: 'application/json',
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `${new Date().toISOString().split('T')[0]}.json`;
      anchor.click();
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      return rejectWithValue(getErrorMassage(error.response.status));
    }
  },
);

const initialState: TBarcodeState = {
  barcodes: [],
  barcode: null,
  loading: false,
  error: null,
  saveLoading: false,
};

const barcodeSlicer = createSlice({
  name: 'barcode',
  initialState,
  reducers: {
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
        state.barcodes = handlePaginationDataFormatter(action);
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
      })
      .addCase(generateCode.pending, handleChangePending)
      .addCase(generateCode.fulfilled, (state, action) => {
        state.saveLoading = false;
        openSuccessNotification('код успешно создана');
        console.log('fulfilled');
      })
      .addCase(generateCode.rejected, handleError)
      //fetchCodeInExcelFile
      .addCase(fetchCodeInExcelFile.pending, handlePending)
      .addCase(fetchCodeInExcelFile.fulfilled, (state, action) => {
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(fetchCodeInExcelFile.rejected, handleError)
      //fetchCodeInJsonFile
      .addCase(fetchCodeInJsonFile.pending, handlePending)
      .addCase(fetchCodeInJsonFile.fulfilled, (state, action) => {
        state.loading = false;
        console.log('fulfilled');
      })
      .addCase(fetchCodeInJsonFile.rejected, handleError);
  },
});
export const { clearError, clearBarcodes } = barcodeSlicer.actions;
export default barcodeSlicer.reducer;

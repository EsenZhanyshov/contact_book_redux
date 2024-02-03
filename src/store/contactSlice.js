import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../helpers/const";
// ! create contacts
export const createContacts = createAsyncThunk(
  "contacts/createContacts",
  async (obj) => {
    await axios.post(API, obj);
  }
);
// ! read contacts
export const readContacts = createAsyncThunk(
  "contacts/readContacts",
  async () => {
    const { data } = await axios(API);
    return data;
  }
);
// ! deleteContacts
export const deleteContact = createAsyncThunk(
  "contatcs/deleteContact",
  async (id) => {
    await axios.delete(`${API}/${id}`);
  }
);
// ! get one contact
export const getOneContact = createAsyncThunk(
  "contact/getOneContact",
  async (id) => {
    const { data } = await axios(`${API}/${id}`);
    return data;
  }
);
// ! edit contact
export const editContact = createAsyncThunk(
  "contact/editContact",
  async ({ obj, id }) => {
    await axios.patch(`${API}/${id}`, obj);
  }
);
const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
    contact: {},
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContacts.pending, (state) => {
        state.status = "Загрузка данных";
      })
      .addCase(createContacts.fulfilled, (state, action) => {
        state.status = "Данные успешно отправлены";
        state.contacts = action.payload;
      })
      .addCase(createContacts.rejected, (state, action) => {
        state.status = "Ошибка при загрузке данных";
        state.error = action.payload.error;
      })
      .addCase(readContacts.pending, (state) => {
        state.status = "Загрузка данных";
      })
      .addCase(readContacts.fulfilled, (state, action) => {
        state.status = "Данные успешно отправлены";
        state.contacts = action.payload;
      })
      .addCase(readContacts.rejected, (state, action) => {
        state.status = "Ошибка при загрузке данных";
        state.error = action.payload.error;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = "Данные успешно удалены";
        state.contacts = action.payload;
      })
      .addCase(getOneContact.fulfilled, (state, action) => {
        state.status = "Данные успешно загружены";
        state.contact = action.payload;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.status = "Данные успешно загружены";
        state.contacts = action.payload;
      });
  },
});

export const { contact, contacts } = contactSlice.actions;
export default contactSlice.reducer;

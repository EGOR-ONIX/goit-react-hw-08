import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      instance.defaults.headers.common.Authorization = `Bearer ${
        thunkApi.getState().auth.token
      }`;

      const { data } = await instance.get("contacts");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;

      if (token) return true;

      return true;
    },
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`contacts/${contactId}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const { data } = await instance.post("contacts", contact);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

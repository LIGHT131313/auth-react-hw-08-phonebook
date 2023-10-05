import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = s => {
  s.isLoading = true;
};
const handleRejected = (s, a) => {
  s.isLoading = false;
  s.error = a.payload;
};

const slice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (s, a) => {
        s.isLoading = false;
        s.error = null;
        s.items = a.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (s, a) => {
        s.isLoading = false;
        s.error = null;
        s.items.push(a.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (s, a) => {
        s.isLoading = false;
        s.error = null;
        const index = s.items.findIndex(contact => contact.id === a.payload.id);
        s.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = slice.reducer;

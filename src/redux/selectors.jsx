import { createSelector } from '@reduxjs/toolkit';

export const selectStore = s => s.contacts;
export const selectContacts = s => s.contacts.items;
export const selectIsLoading = s => s.contacts.isLoading;
export const selectError = s => s.contacts.error;
export const selectFilter = s => s.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

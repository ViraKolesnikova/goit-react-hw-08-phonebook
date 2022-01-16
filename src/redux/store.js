import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { authApi } from './auth/auth-reducer';
import { contactsApi } from './contacts/contacts-reducer';
import { filterReducer } from './contacts/contacts-reducer';
import { authSlice } from './auth/auth-slicer';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

setupListeners(store.dispatch);

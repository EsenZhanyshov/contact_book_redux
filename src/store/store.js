import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactSlice";
import contactReducer from "./contactSlice";

export default configureStore({
  reducer: {
    contacts: contactsReducer,
    contact: contactReducer,
  },
});

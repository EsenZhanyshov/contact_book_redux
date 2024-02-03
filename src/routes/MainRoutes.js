import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import ContactsPage from "../components/ContactsPage";
import AddContact from "../components/AddContact";
import EditContact from "../components/EditContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;

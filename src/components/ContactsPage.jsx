import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readContacts } from "../store/contactSlice";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import add from "./images/add.svg";

const ContactsPage = () => {
  const dispacth = useDispatch();
  let { contacts } = useSelector((state) => state.contacts);
  useEffect(() => {
    dispacth(readContacts());
  }, []);
  useEffect(() => {
    dispacth(readContacts());
  }, [contacts]);
  return (
    <div className="wrapper">
      <div className="contacts-page page">
        <h2 className="page__title">Contacts:</h2>
        {contacts?.map((elem) => (
          <Contact {...elem} key={elem.id} />
        ))}
        <div className="btn-edit add-btn">
          <Link to={"/add"} className="form-btn ">
            <img src={add} alt="#" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

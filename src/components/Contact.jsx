import React from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../store/contactSlice";
import { useDispatch } from "react-redux";

import cancel from "./images/cancel.svg";
import pencil from "./images/pencil.svg";

const Contact = ({ name, surname, phone, img, id }) => {
  const dispacth = useDispatch();
  const deleteClick = () => {
    dispacth(deleteContact(id));
  };
  return (
    <div className="card">
      <div className="card__pic">
        <img src={img} alt="#" />
      </div>
      <div className="card__info">
        <h3 className="card__text">{phone}</h3>
        <h3 className="card__text">{name}</h3>
        <h3 className="card__text">{surname}</h3>
      </div>
      <div className="card__btns">
        <Link to={`/edit/${id}`} className="btn add-btn">
          <img src={pencil} alt="#" />
        </Link>
        <Link className="btn add-btn">
          <img src={cancel} alt="#" onClick={deleteClick} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;

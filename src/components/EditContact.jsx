import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import check from "./images/check.svg";

import { editContact, getOneContact } from "../store/contactSlice";

const EditContact = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  let { contact } = useSelector((state) => state.contact);

  const [name, setName] = useState(contact ? contact.name : "");
  const [surname, setSurname] = useState(contact ? contact.surname : "");
  const [phone, setPhone] = useState(contact ? contact.phone : "");
  const [img, setImg] = useState(contact ? contact.img : "");

  useEffect(() => {
    dispacth(getOneContact(id));
  }, []);

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setSurname(contact.surname);
      setPhone(contact.phone);
      setImg(contact.img);
    }
  }, [contact]);

  // console.log(contact);

  // проверка наличия contact перед установкой значений по умолчанию

  const updateClick = () => {
    if (!name || !surname || !phone || !img) {
      return;
    }
    let obj = {
      name: name,
      surname: surname,
      phone: phone,
      img: img,
    };
    dispacth(editContact({ obj, id })); // передача объекта вместо двух параметров
    navigate("/contacts");
  };

  return (
    <div className="wrapper">
      <div className="block-form">
        <form className="form">
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="text"
            placeholder="Введите номер"
            className="input"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Введите имя"
            className="input"
          />
          <input
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            type="text"
            placeholder="Введите фамилию"
            className="input"
          />
          <input
            onChange={(e) => setImg(e.target.value)}
            value={img}
            type="text"
            placeholder="Введите картинку"
            className="input"
          />
          <div className="btn-edit">
            <div className="form-btn">
              <img src={check} alt="#" onClick={updateClick} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;

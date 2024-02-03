import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createContacts } from "../store/contactSlice";
import check from "./images/check.svg";
import cancel from "./images/cancel.svg";

const AddContact = () => {
  // ! состояния инпутов
  const dispacth = useDispatch();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [img, setImg] = useState("");

  // ! событие на кнопку отправляет данные в db.json
  const postClick = () => {
    if (!phone || !name || !surname || !img) {
      return;
    }
    dispacth(
      createContacts({ phone: phone, name: name, surname: surname, img: img })
    );
    setPhone("");
    setName("");
    setSurname("");
    setImg("");
  };

  return (
    <div className="wrapper">
      <div className="block-form">
        <form className="form">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Введите номер"
            className="input"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Введите имя"
            className="input"
          />
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="Введите фамилию"
            className="input"
          />
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="Введите картинку"
            className="input"
          />
          <div className="block__form-btn">
            <Link to={"/contacts"} className="form-btn btn btn-create">
              <img src={check} alt="#" onClick={postClick} />
            </Link>
            <Link to={"/contacts"} className="form-btn btn">
              <img src={cancel} alt="#" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;

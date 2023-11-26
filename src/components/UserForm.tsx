import React, { useState, useContext } from "react";
import { UsersContext } from "../context/Context";
import { ListTypes } from "../interface/interfaces";

const UserForm = ({editedUserId} : {editedUserId: number}) => {
  const { setUsersList, usersList,isEdit, setIsEdit } = useContext(UsersContext);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [validateMessage, setValidateMessage] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name.length) {
      if (isEdit) {
        // Aktualizacja danych użytkownika w przypadku edycji
        setUsersList(
          usersList.map((user) =>
            user.id === editedUserId
              ? { ...user, name: formData.name, email: formData.email }
              : user
          )
        );
        setIsEdit(false); // Wyłącz tryb edycji po zatwierdzeniu
      } else {
        // Dodanie nowego użytkownika
        const newUser: ListTypes = {
          id: Math.floor(Math.random() * 1000),
          name: formData.name,
          email: formData.email,
          date: new Date().toLocaleDateString(),
        };
        setUsersList([...usersList, newUser]);
      }

      // Zresetowanie formularza i komunikatu walidacyjnego
      setFormData({ name: "", email: "" });
      setValidateMessage("");
    } else {
      setValidateMessage("Podaj niezbędne dane");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="">
        <input
          className="mr-4 border-2 p-2"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleOnChange}
          placeholder="imię...."
        />
      </label>
      <label htmlFor="">
        <input
          className="mr-4 border-2 p-2"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="email..."
        />
      </label>
      <button className="p-2 bg-blue-600 text-white hover:bg-blue-400 transition-all rounded-xl hover:scale-110" type="submit">{isEdit && editedUserId ? "Zapisz" : "Dodaj"}</button>
      <p className="text-center text-red-700 font-bold mt-4">{validateMessage}</p>
    </form>
  );
};

export default UserForm;

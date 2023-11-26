import React, { useContext } from "react";
import { UsersContext } from "../context/Context";
import UserForm from "./UserForm";
import { ListTypes } from "../interface/interfaces";

interface SingleUserInfoProps extends ListTypes {
  handleDeleteUser: (id: number) => void;
}

const SingleUserInfo = ({
  id,
  name = "",
  email = "",
  date,
  handleDeleteUser,
}: SingleUserInfoProps) => {
  const { isEdit, setIsEdit, editedUserId, setEditedUserId } = useContext(
    UsersContext
  );

  const handleIsEdit = (): void => {
    setIsEdit(!isEdit);
    setEditedUserId(isEdit ? null : id); // Ustawienie ID edytowanego użytkownika
  };

  const handleCancel = ():void => {
    setIsEdit(false)
  }

  const changeButtonMessage = isEdit ? "Zapisz" : "Edytuj";

  return (
    <>
      {isEdit && editedUserId === id ? (
        <div className="flex justify-center items-center">
        <UserForm editedUserId={id} />
        <button onClick={handleCancel} className="self-start mx-2 border-2 rounded-lg p-2 bg-red-800 hover:bg-red-600 hover:scale-110 transition-all text-white">Cancel</button>
        </div>
      ) : (
        <tbody className="flex justify-between mt-2" key={id}>
          <tr className="border-2 ml-1 p-2 basis-1/3 min-w-fit">
            <td>{name}</td>
          </tr>
          <tr className="border-2 ml-1 p-2 basis-1/3 min-w-fit">
            <td>{email}</td>
          </tr>
          <tr className="border-2 ml-1 p-2 basis-1/3 min-w-fit">
            <td>Data: <em>{date}</em></td>
          </tr>
          <button
            onClick={() => handleDeleteUser(id)}
            className="mx-2 border-2 rounded-lg p-2 bg-red-800 hover:bg-red-600 hover:scale-110 transition-all text-white"
          >
            Delete
          </button>
          <button className="p-2 bg-blue-600 text-white hover:bg-blue-400 transition-all rounded-xl hover:scale-110" onClick={handleIsEdit}>{changeButtonMessage}</button>
        </tbody>
      )}
    </>
  );
};

export default SingleUserInfo;

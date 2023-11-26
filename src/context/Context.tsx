import React, { createContext, useState, useEffect } from "react";
import { ListTypes } from "../interface/interfaces";

interface ContextChild {
  children: React.ReactNode;
}

interface UsersContextProps {
  usersList: ListTypes[];
  setUsersList: React.Dispatch<React.SetStateAction<ListTypes[]>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  editedUserId: number | null;
  setEditedUserId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const UsersContext = createContext({} as UsersContextProps);

const Context = ({ children }: ContextChild) => {
  // Wczytanie danych z localStorage lub pusta tablica, jeśli brak danych
  const initialUsersList: ListTypes[] = JSON.parse(localStorage.getItem("usersList") || "[]");

  const [usersList, setUsersList] = useState<ListTypes[]>(initialUsersList);
  const [isEdit, setIsEdit] = useState(false);
  const [editedUserId, setEditedUserId] = useState<number | null>(null);

  // Efekt, który zapisuje dane do localStorage za każdym razem, gdy usersList się zmienia
  useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify(usersList));
  }, [usersList]);

  return (
    <UsersContext.Provider value={{ usersList, setUsersList, isEdit, setIsEdit, editedUserId, setEditedUserId }}>
      {children}
    </UsersContext.Provider>
  );
};

export default Context;

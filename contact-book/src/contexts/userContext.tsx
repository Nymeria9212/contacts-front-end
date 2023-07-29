/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { Children } from "../interfaces/children";
import { TRegister } from "../components/forms/register/schemaRegister";
import { api } from "../services/api";
import { IProfile, IUserContext } from "../interfaces/userContextInterface";
import { LoginContext } from "./loginContext";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: Children) => {
  const { setLogin, setRegister } = useContext(LoginContext);
  const [profile, setProfile] = useState<IProfile | undefined>();
  const [showProfile, setShowProfile] = useState(false);
  const createUser = async (data: TRegister) => {
    try {
      const response = await api.post("/users", data);

      setRegister(false);
      setLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  const readProfile = async () => {
    const token = localStorage.getItem("@token");
    if (token) {
      try {
        const response = await api.get<IProfile>("users/profile", {
          headers: { Authorization: "Bearer: " + token },
        });

        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{ createUser, profile, showProfile, setShowProfile, readProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

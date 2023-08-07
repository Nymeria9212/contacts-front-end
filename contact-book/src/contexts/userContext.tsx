/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { Children } from "../interfaces/children";
import { TRegister } from "../components/forms/register/schemaRegister";
import { api } from "../services/api";
import {
  IProfile,
  IUserContext,
  TProfileUpdate,
} from "../interfaces/userContextInterface";
import { LoginContext } from "./loginContext";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: Children) => {
  const { setLogin, setRegister } = useContext(LoginContext);
  const [profile, setProfile] = useState<IProfile | undefined>();
  const [showProfile, setShowProfile] = useState(false);
  const [modalUpdateUser, setModalUpdateUser] = useState(false);
  const navigate = useNavigate();

  const createUser = async (data: TRegister) => {
    try {
      const response = await api.post("/users", data);
      setRegister(false);
      setLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  const exit = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (!token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      const readProfile = async () => {
        try {
          const response = await api.get<IProfile>("users/profile", {
            headers: { Authorization: "Bearer: " + token },
          });
          setProfile(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      readProfile();
    }
  }, []);

  const updateUser = async (data: TProfileUpdate) => {
    const token = localStorage.getItem("@token");
    if (token) {
      try {
        const response = await api.patch("users/profile", data, {
          headers: {
            Authorization: "Bearer: " + token,
          },
        });

        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteUser = async () => {
    const token = localStorage.getItem("@token");
    if (token) {
      try {
        const response = await api.delete("users/profile", {
          headers: {
            Authorization: "Bearer: " + token,
          },
        });
        localStorage.clear();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        profile,
        showProfile,
        setShowProfile,
        updateUser,
        modalUpdateUser,
        setModalUpdateUser,
        deleteUser,
        exit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

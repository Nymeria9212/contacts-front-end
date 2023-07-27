import { useContext } from "react";
import { ButtonsLogin } from "../../components/buttons/buttonsLogin";
import { Header } from "../../components/header";
import { WallpaperDivPage } from "../../components/wallpaper";
import { LoginContext } from "../../contexts/loginContext";
import { FormLogin } from "../../components/forms/login/login";
import { FormRegister } from "../../components/forms/register/register";

export const Login = () => {
  const { login, register } = useContext(LoginContext);
  return (
    <div>
      <Header children={<ButtonsLogin />} />
      <WallpaperDivPage />
      {login === true ? <FormLogin /> : null}
      {register === true ? <FormRegister /> : null}
    </div>
  );
};

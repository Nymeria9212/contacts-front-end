import { ReactNode } from "react";
import { HeaderStyle } from "./headerStyle";
interface ButtonsChildren {
  children: ReactNode;
}
export const Header = ({ children }: ButtonsChildren) => {
  return (
    <HeaderStyle>
      <div>
        <img src="src/assets/icon-book.png" alt="book contact icon" />
        Sua agenda
      </div>
      {children}
    </HeaderStyle>
  );
};

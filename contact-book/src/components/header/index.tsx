import { ReactNode } from "react";
interface ButtonsChildren {
  children: ReactNode;
}
export const Header: React.FC<ButtonsChildren> = ({ children }) => {
  return (
    <header>
      <div>
        <img src="src/assets/icon-book.png" alt="book contact icon" />
        Sua agenda
      </div>
      {children}
    </header>
  );
};

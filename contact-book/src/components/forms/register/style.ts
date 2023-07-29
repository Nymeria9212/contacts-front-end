import { styled } from "styled-components";

export const ModalRegister = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;

  div {
    height: 20rem;
    width: 20rem;
    position: relative;
    border: solid 2px var(--color-shadow);
    border-radius: 1rem;
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  form {
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: center;
    justify-content: space-evenly;
    width: 80%;
  }
  .closeModal {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
  }
`;

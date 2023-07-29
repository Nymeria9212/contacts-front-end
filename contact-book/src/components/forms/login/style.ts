import { styled } from "styled-components";

export const ModalLogin = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20rem;
    width: 20rem;
    border: solid 2px var(--color-shadow);
    border-radius: 1rem;
    background-color: var(--color-white);
    position: relative;
  }
  form {
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: center;
    justify-content: space-evenly;
    width: 80%;
  }
  form > p {
    color: var(--color-blue);
    cursor: pointer;
  }

  .closeModal {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
  }
`;

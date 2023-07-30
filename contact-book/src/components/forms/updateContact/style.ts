import { styled } from "styled-components";

export const ModalUpdate = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  margin-top: 8rem;

  div {
    width: 15rem;
    height: 15rem;
    display: flex;
    background-color: var(--color-white);
    flex-direction: column;
    position: relative;
    justify-content: center;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .closeModalContact {
    position: absolute;
    right: 0.75rem;
    width: 2rem;
    top: 0.75rem;
  }
`;

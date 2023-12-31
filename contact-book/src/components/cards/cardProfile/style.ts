import { styled } from "styled-components";

export const ModalProfile = styled.div`
  height: 100vh;
  width: 30%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  .cardProfile {
    height: 15rem;
    width: 15rem;
    background-color: var(--color-white);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .closeProfile {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
  }
`;

import styled from "styled-components";

export const ButtonStyle = styled.button<{ $focused: boolean }>`
  background-color: #1a1a1a;
  color: white;
  font-size: 1.2rem;
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  text-align: center;
  min-width: 160px;
  min-height: 60px;

  box-shadow: ${({ $focused }) =>
    $focused ? "0 0 10px 3px #00bfff" : "0 0 0px rgba(255, 255, 255, 0.2)"};
  background-color: ${({ $focused }) => ($focused ? "#333" : "#1a1a1a")};

  &:hover {
    background-color: #2a2a2a;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

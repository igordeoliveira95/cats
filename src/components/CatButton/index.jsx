import styled from "styled-components";
import { IoMdPaw } from "react-icons/io";

export const CatButton = styled.button`
  display: flex;
  align-items: center;
  background: #333333;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem 2rem;
  border: 0;
  border-radius: 25px;
  box-shadow: 1px 1px 5px #888888;
  transition: 0.2s;
  cursor: pointer;

  @media (max-width: 720px) {
    position: fixed;
    bottom: 20px;
  }

  :hover {
    background: #444444;
    transform: scale(1.1);
    box-shadow: 2px 2px 5px #888888;
  }
  
  :active {
    transform: scale(1.2);
    background: #333333;
  }
`;

export const PawIcon = styled(IoMdPaw)`
  height: auto;
  width: 35px;
`;
import styled from "styled-components";
import { IoMdPaw } from "react-icons/io";

export const Background = styled.img`
  filter: blur(3px);
  opacity: 0.4;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FactContainer = styled.div`
  font-size: 1.5rem;
  margin: 20px;
`;

export const FactButton = styled.button`
  display: flex;
  align-items: center;
  background: #333;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem 2rem;
  border: 0;
  border-radius: 25px;
  margin: 10px;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background: #444;
    transform: scale(1.1);
  }
`;

export const PawIcon = styled(IoMdPaw)`
  height: auto;
  width: 35px;
`;

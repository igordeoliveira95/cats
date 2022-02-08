import styled from "styled-components";
import { IoMdPaw } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FactContainer = styled.div`
  font-size: 1.5rem;
  text-align: center;
  width: 90%;
  height: 300px;
  margin-top: 80px;
  @media (max-width: 720px) {
    height: 30%;
  }
`;

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

export const PreviousFactsContainer = styled.ul`
  text-align: left;
  width: 90%;
  margin-top: 80px;
  margin-bottom: 80px;
  list-style-type: none;
  height: auto;
`;

export const PreviousFactsList = styled.li`
  margin-top: 15px;
  color: #838383;
`;

export const PawIcon = styled(IoMdPaw)`
  height: auto;
  width: 35px;
`;

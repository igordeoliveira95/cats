import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 500px;
  @media (max-width: 720px) {
    max-width: 320px;
  }
`;

export const Image = styled.img`
  margin-top: 80px;
  margin-bottom: 80px;
  max-height: 400px;
  max-width: 300px;
  border-radius: 3%;
  box-shadow: 1px 1px 5px #888888;
`;

export const Loading = styled.img`
  width: 40px;
  height: 40px;
`;

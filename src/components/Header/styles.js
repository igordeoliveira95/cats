import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #333333;
  color: #ffffff;
`;

export const SocialLinks = styled.div`
  width: 100px;
  padding: 0.5rem;
  margin-left: 1rem;
  display: flex;
  justify-content: space-around;
`;

export const Logo = styled.div`
  display: flex;
  padding: 0.5rem;
`;

export const Image = styled.img`
  height: 35px;
  width: 35px;
  transition: transform 0.2s;
  ${(props) =>
    props.hover &&
    `
      :hover {
        transform: scale(1.1);
      }
  `}
`;

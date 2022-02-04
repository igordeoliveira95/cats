import styled from "styled-components";
import { FaGithubAlt } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const icons = `
  height: 30px;
  width: 30px;
  color: #ffffff;
  transition: transform 0.2s;
  margin: 0 5px;
  :hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333333;
  color: #ffffff;
  height: 55px;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 5px;
`;

export const GitHubIcon = styled(FaGithubAlt)`
  ${icons}
`;

export const LinkedInIcon = styled(BsLinkedin)`
  ${icons}
`;

export const Logo = styled.div`
  display: flex;
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

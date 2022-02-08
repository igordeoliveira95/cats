import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

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
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  @media (max-width: 720px) {
    width: 10%;
    h1 {
      opacity: 0%;
    }
  }
`;

export const Image = styled.img`
  height: 35px;
  width: 35px;
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  width: 20%;
  height: 50%;
  color: #d6d6d6;
  @media (max-width: 720px) {
    font-size: 16px;
    width: 40%;
    justify-content: start;
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 10%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  color: #d6d6d6;
  transition: 0.3s;
  :hover {
    color: #ffffff;
    border-bottom: solid;
    border-width: 1px;
  }
  &.active {
    color: #ffffff;
    border-bottom: solid;
    border-width: 1px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 20px;
`;

export const GitHubIcon = styled(FaGithubAlt)`
  ${icons}
`;

export const LinkedInIcon = styled(BsLinkedin)`
  ${icons}
`;

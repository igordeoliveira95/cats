import {
  Container,
  Logo,
  Image,
  SocialLinks,
  GitHubIcon,
  LinkedInIcon,
  NavMenu,
  StyledLink,
} from "./styles";
import logo from "../../assets/paw.png";

function Header() {
  return (
    <Container>
      <Logo>
        <Image src={logo} alt="Cat paw" />
        <h1>Cats</h1>
      </Logo>
      <NavMenu>
        <StyledLink to="/">Facts</StyledLink>
        <StyledLink to="/photos">Photos</StyledLink>
      </NavMenu>
      <SocialLinks>
        <a href="https://github.com/igordeoliveira95" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/igordeoliveira1/" target="_blank">
          <LinkedInIcon />
        </a>
      </SocialLinks>
    </Container>
  );
}

export default Header;

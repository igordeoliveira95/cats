import { Container, Logo, Image, SocialLinks } from "./styles";

import logo from "../../assets/paw.png";
import gitHub from "../../assets/Octocat.png";
import linkedIn from "../../assets/linkedin.png";

function Header() {
  return (
    <Container>
      <Logo>
        <Image src={logo} alt="Cat paw" />
        <h1>Cat facts</h1>
      </Logo>
      <SocialLinks>
        <a href="https://github.com/igordeoliveira95">
          <Image hover={true} src={gitHub} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/igordeoliveira1/">
          <Image hover={true} src={linkedIn} alt="LinkedIn" />
        </a>
      </SocialLinks>
    </Container>
  );
}

export default Header;

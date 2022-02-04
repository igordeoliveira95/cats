import {
  Container,
  Background,
  FactButton,
  PawIcon,
  FactContainer,
} from "./styles";
import backgroundImage from "../../assets/yoda_and_aurora.jpg";

import { useEffect, useState } from "react";
const axios = require("axios");

function Facts() {
  const [fact, setFact] = useState("");

  const getFact = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setFact(response.data.fact);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <Container>
      <FactContainer>{fact}</FactContainer>
      <FactButton type="button" onClick={() => getFact()}>
        <PawIcon />
      </FactButton>
      <Background src={backgroundImage} />
    </Container>
  );
}

export default Facts;

import { useEffect, useState } from "react";

import Header from "../../components/Header";
import {CatButton, PawIcon} from "../../components/CatButton";
import {
  Container,
  FactContainer,
  PreviousFactsContainer,
  PreviousFactsList,
} from "./styles";

const axios = require("axios");

function Facts() {
  const [fact, setFact] = useState("");
  const [previousFacts, setPreviousFacts] = useState([]);

  const getFact = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setFact(response.data);
      const factToList = response.data.fact;
      if (!previousFacts.includes(factToList)) {
        setPreviousFacts((oldFacts) => [...oldFacts, factToList]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <FactContainer>{fact.fact}</FactContainer>
        <CatButton onClick={() => getFact()}>
          <PawIcon/>
        </CatButton>
        <PreviousFactsContainer>
          {previousFacts.map((fact) => {
            return <PreviousFactsList key={fact}>{fact}</PreviousFactsList>;
          })}
        </PreviousFactsContainer>
      </Container>
    </>
  );
}

export default Facts;

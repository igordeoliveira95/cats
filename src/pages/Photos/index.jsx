import { useEffect, useState } from "react";

import Header from "../../components/Header";
import { Container, Image, ImageContainer, Loading } from "./styles";
import { CatButton, PawIcon } from "../Facts/styles";
import loadingGif from "../../assets/loading.gif";

const axios = require("axios");

function Photos() {
  const [catPhoto, setCatPhoto] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getPhoto = async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setCatPhoto(response.data[0].url);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ImageContainer>
          {isLoading ? <Loading src={loadingGif} /> : <Image src={catPhoto} />}
        </ImageContainer>
        <CatButton onClick={() => getPhoto()}>
          <PawIcon />
        </CatButton>
      </Container>
    </>
  );
}

export default Photos;

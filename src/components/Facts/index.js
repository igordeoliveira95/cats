import { useEffect } from "react";
const axios = require("axios");

function Facts() {
  const getFact = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFact();
  }, []);

  return <div>Hello porra</div>;
}

export default Facts;

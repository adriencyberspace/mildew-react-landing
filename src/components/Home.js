import React from "react";
import Shop from "./Shop/Shop";
import { Blurb, BlurbDiv, P } from "./Content";

const Home = () => {
  const marginBottom20 = {
    marginBottom: 20,
  };

  return (
    <div className="content-container">
      <div>
        <BlurbDiv>
          <Blurb> The secondhand fashion magazine.</Blurb>
        </BlurbDiv>
        <P style={marginBottom20}> In print Summer 2022. </P>
      </div>

      <Shop />
    </div>
  );
};

export { Home };

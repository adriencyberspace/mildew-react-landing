import React from "react";
import Shop from "./Shop/Shop";
import { Blurb, BlurbDiv, P, A, Span, MobileLink } from "./Content";

const Home = () => {
  const marginBottom20 = {
    marginBottom: 20,
  };

  const marginTop20 = {
    marginTop: 20,
  };

  const margin20 = {
    marginTop: 20,
    marginBottom: 40,
    paddingBottom: 40,
  };

  return (
    <div className="content-container">
      <div>
        <BlurbDiv>
          <Blurb> The secondhand fashion magazine.</Blurb>
        </BlurbDiv>
      </div>
      <Shop />
      <Span>
        <P style={marginTop20}>
          <A
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/mildewmag"
          >
            @mildewmag
          </A>
        </P>
        <P style={marginTop20}>
          <A rel="noreferrer" target="_blank" href="mailto:mildewmag@gmail.com">
            mildewmag@gmail.com
          </A>
        </P>
        <P style={margin20}>
          <MobileLink to="/about">About Mildew</MobileLink>
        </P>
      </Span>
      {/* <Span>
        <P style={margin20}>
          <MobileLink to="/">Home</MobileLink>
        </P>
      </Span> */}
    </div>
  );
};

export { Home };

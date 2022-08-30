import React from "react";
import { P, Span, MobileLink } from "./Content";

const About = () => {
  const marginTop20 = {
    marginTop: 20,
  };

  return (
    <div className="content-container">
      <div>
        <P style={marginTop20}>
          Mildew is a print magazine about secondhand fashion and creative
          reuse, featuring art and writing that inspires us to think about old
          clothes in new ways. As the voice of the new-to-you ecosystem, Mildew
          is a guide to dressing in the spirit of our times and reveling in the
          decay of fashion as we knew it.
        </P>
        <P style={marginTop20}>Not new, but original.</P>
        <P style={marginTop20}>In print October 2022.</P>
        <Span>
          <P style={marginTop20}>
            <MobileLink to="/">Home</MobileLink>
          </P>
        </Span>
      </div>
    </div>
  );
};

export { About };

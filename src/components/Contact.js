import React from "react";
import { A, P, Span, MobileLink } from "./Content";

const Contact = () => {
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
        <P style={marginTop20}>In print Summer 2022.</P>
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
        <Span>
          <P style={marginTop20}>
            <MobileLink to="/">Home</MobileLink>
          </P>
        </Span>
      </div>
    </div>
  );
};

export { Contact };

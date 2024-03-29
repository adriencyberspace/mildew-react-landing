import React from "react";
import { A, P, Span, MobileLink } from "./Content";
import Mailchimp from "./Mailchimp";

const About = () => {
  const marginTop20 = {
    marginTop: 20,
  };

  const marginTop40 = {
    marginTop: 40,
  };

  const margin20 = {
    marginTop: 20,
    marginBottom: 20,
  };

  return (
    <div className="content-container">
      <div>
        <P style={marginTop40}>
          Mildew is an annual print magazine about secondhand fashion and
          creative reuse, featuring art and writing that inspires us to think
          about old clothes in new ways. Mildew is a guide to dressing in the
          spirit of our times and reveling in the decay of fashion as we knew
          it.
        </P>
        <P style={marginTop20}>Not new, but original.</P>
        <P style={marginTop20}>
          See our Instagram for a list of stockists near you!
        </P>
        <P style={margin20}> Stay in the loop:</P>
        <Mailchimp />
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
            <A
              rel="noreferrer"
              target="_blank"
              href="mailto:mildewmag@gmail.com"
            >
              mildewmag@gmail.com
            </A>
          </P>
          <P style={marginTop20}>
            <MobileLink to="/about">About Mildew</MobileLink>
          </P>
        </Span>
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

import React from "react";

import { fadeIn } from "@styles/animations/fade-animation";
import { styled } from "@styles/stitches.config";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <Wrapper>
      <BeatLoader color="#0A192B" loading={true} size={14} aria-label="Loading" data-testid="loader" />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled("div", {
  columnCentered: true,
  width: "100%",
  height: "100%",
  animation: `${fadeIn} 400ms cubic-bezier(0.45, 0.8, 0.65, 1)`,
});

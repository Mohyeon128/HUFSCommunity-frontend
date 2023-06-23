import React from "react";

import Header from "./fragments/Header";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  background: "$gray100",
});

const Content = styled("main", {
  width: "100%",
  height: "100%",
  maxWidth: rem(960),
  paddingTop: rem(72),
  paddingX: rem(24),
  marginX: "auto",
});

export default Layout;

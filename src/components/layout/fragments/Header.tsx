import React from "react";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";

import { rem } from "polished";
import { styled } from "@styles/stitches.config";

const Header = observer(() => {
  return (
    <Wrapper>
      <Inner>
        <Brand>외대로81</Brand>
        <MenuContainer>
          {authStore.user && <Menu>MY 소식</Menu>}
          <Menu>전체</Menu>
          <Menu>토픽</Menu>
          <MenuDivider />
          <Menu>{authStore.user ? authStore.user.name : "로그인"}</Menu>
        </MenuContainer>
      </Inner>
    </Wrapper>
  );
});

export default Header;

const Wrapper = styled("header", {
  position: "fixed",
  width: "100%",
  height: rem(72),
  backgroundColor: "$primary",
});

const Inner = styled("div", {
  rowBetween: true,
  width: "100%",
  maxWidth: rem(960),
  height: "100%",
  paddingX: rem(24),
  marginX: "auto",
});

const Brand = styled("h1", {
  heading2: true,
  color: "$white",
});

const MenuContainer = styled("div", {
  rowCentered: true,
  gap: 28,

  "@md": {
    gap: 42,
  },
});

const MenuDivider = styled("span", {
  width: 1,
  height: 28,
  backgroundColor: "rgba(255,255,255,0.23)",
});

const Menu = styled("a", {
  color: "$white",
  fontSize: rem(16),
  fontWeight: 500,
});

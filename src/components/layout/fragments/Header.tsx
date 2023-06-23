import React from "react";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";

import { rem } from "polished";
import { styled } from "@styles/stitches.config";
import { Link } from "react-router-dom";
import { AUTH_PATH, DASHBOARD_PATH } from "@constants/route-constants";

const Header = observer(() => {
  return (
    <Wrapper>
      <Inner>
        <Brand to={DASHBOARD_PATH}>외대로81</Brand>
        <MenuContainer>
          {authStore.user && <MenuLink to={``}>MY 소식</MenuLink>}
          <MenuLink to={``}>전체</MenuLink>
          <MenuLink to={``}>토픽</MenuLink>
          <MenuDivider />
          {authStore.user ? (
            <MenuLink to={``}>authStore.user.name</MenuLink>
          ) : (
            <MenuLink to={AUTH_PATH.LOGIN}>로그인</MenuLink>
          )}
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

const Brand = styled(Link, {
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

const MenuLink = styled(Link, {
  color: "$white",
  fontSize: rem(16),
  fontWeight: 500,
});

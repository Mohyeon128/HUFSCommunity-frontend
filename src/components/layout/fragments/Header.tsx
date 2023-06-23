import React from "react";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";

import { rem } from "polished";
import { styled } from "@styles/stitches.config";
import { Link } from "react-router-dom";
import logo from "@assets/logo.svg";
import { AUTH_PATH, DASHBOARD_PATH, MY_PATH, TOPIC_PATH, TOTAL_PATH } from "@constants/route-constants";

const Header = observer(() => {
  return (
    <Wrapper>
      <Inner>
        <Brand to={DASHBOARD_PATH}>
          <Logo src={logo} draggable={false} />
        </Brand>
        <MenuContainer>
          {!authStore.isLoading && authStore.user && <MenuLink to={``}>MY 소식</MenuLink>}
          <MenuLink to={TOTAL_PATH}>전체</MenuLink>
          <MenuLink to={TOPIC_PATH}>토픽</MenuLink>
          <MenuDivider />
          {authStore.isLoading ? (
            <MenuLink to={``}>로딩중</MenuLink>
          ) : authStore.user ? (
            <MenuLink to={MY_PATH}>{authStore.user.name}</MenuLink>
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

const Logo = styled("img", {
  width: rem(96),
  userSelect: "none",
});

const MenuContainer = styled("div", {
  rowCentered: true,
  height: "100%",
});

const MenuDivider = styled("span", {
  width: 1,
  height: 28,
  backgroundColor: "rgba(255,255,255,0.23)",
});

const MenuLink = styled(Link, {
  centered: true,
  height: "100%",
  paddingX: rem(24),
  color: "$white",
  fontSize: rem(16),
  fontWeight: 500,
});

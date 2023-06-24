import React from "react";
import { useMatch } from "react-router-dom";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";

import { rem } from "polished";
import { styled } from "@styles/stitches.config";
import { Link } from "react-router-dom";
import logo from "@assets/logo.svg";
import { AUTH_PATH, DASHBOARD_PATH, MY_PATH, APPLY_PATH, TOPICS_PATH, TOTAL_PATH } from "@constants/route-constants";
import { BeatLoader } from "react-spinners";

const Header = observer(() => {
  const matchApply = useMatch(APPLY_PATH);
  const matchTotal = useMatch(`${TOTAL_PATH}/*`);
  const matchTopic = useMatch(`${TOPICS_PATH.ROOT}/*`);

  return (
    <Wrapper>
      <Inner>
        <Brand to={DASHBOARD_PATH}>
          <Logo src={logo} draggable={false} />
        </Brand>
        <MenuContainer>
          {!authStore.isLoading && authStore.user && (
            <MenuLink
              to={APPLY_PATH}
              style={!!matchApply ? { background: "linear-gradient(180deg, #0A192B 0%, #050F17 100%)" } : {}}
            >
              등록 신청
            </MenuLink>
          )}
          <MenuLink
            to={TOTAL_PATH}
            style={!!matchTotal ? { background: "linear-gradient(180deg, #0A192B 0%, #050F17 100%)" } : {}}
          >
            전체
          </MenuLink>
          <MenuLink
            to={TOPICS_PATH.ROOT}
            style={!!matchTopic ? { background: "linear-gradient(180deg, #0A192B 0%, #050F17 100%)" } : {}}
          >
            토픽
          </MenuLink>
          <MenuDivider />
          {authStore.isLoading ? (
            <BeatLoader
              color={"#FFFFFF"}
              loading={true}
              size={8}
              aria-label="Loading"
              data-testid="loader"
              style={{ padding: "0 24px 0 24px" }}
            />
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
  marginX: rem(24),
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

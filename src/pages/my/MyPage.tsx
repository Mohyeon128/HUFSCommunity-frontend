import React from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";

import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";
import { DASHBOARD_PATH } from "@constants/route-constants";

const MyPage = observer(() => {
  const navigate = useNavigate();
  const handelLogOut = async () => {
    const result = await authStore.logout();
    if (result.successful) {
      alert("로그아웃 되었습니다");
      navigate(DASHBOARD_PATH);
    } else alert("오류가 발생했습니다");
  };
  return (
    <Wrapper>
      <LogOutButton onClick={() => handelLogOut()}>로그아웃</LogOutButton>
    </Wrapper>
  );
});

export default MyPage;

const Wrapper = styled("div", {
  columnCentered: true,
  width: "100%",
  height: "100%",
  animation: `${fadeIn} 400ms cubic-bezier(0.45, 0.8, 0.65, 1)`,
});

const LogOutButton = styled("button", {
  formSubmit: true,
  width: "fit-content",
  cursor: "pointer",
  paddingX: rem(56),
});

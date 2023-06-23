import React from "react";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";

import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";

const DashBoardPage = observer(() => {
  return (
    <Wrapper>
      <div>
        {authStore.user ? (
          <button onClick={() => authStore.logout()}>Logout</button>
        ) : (
          <button onClick={() => authStore.login("example@gmail.com", "password")}>Login</button>
        )}
      </div>
    </Wrapper>
  );
});

export default DashBoardPage;

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  animation: `${fadeIn} 400ms cubic-bezier(0.45, 0.8, 0.65, 1)`,
});

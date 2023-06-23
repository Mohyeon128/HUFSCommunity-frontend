import React from "react";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";

const DashBoardPage = observer(() => {
  return (
    <>
      <div>
        {authStore.user ? (
          <button onClick={() => authStore.logout()}>Logout</button>
        ) : (
          <button onClick={() => authStore.login("example@gmail.com", "password")}>Login</button>
        )}
      </div>
    </>
  );
});

export default DashBoardPage;

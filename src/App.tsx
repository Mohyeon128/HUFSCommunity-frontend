import React, { lazy, Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import authStore from "@stores/auth-store";

import Layout from "@components/layout/Layout";

const DashboardPage = lazy(() => import("@pages/dashboard/DashBoardPage"));
const LoginPage = lazy(() => import("@pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("@pages/auth/RegisterPage"));

import { AUTH_PATH, DASHBOARD_PATH } from "@constants/route-constants";

const pages = [
  {
    path: DASHBOARD_PATH,
    component: DashboardPage,
    auth: false,
  },
  {
    path: AUTH_PATH.LOGIN,
    component: LoginPage,
    auth: false,
  },
  {
    path: AUTH_PATH.REGISTER,
    component: RegisterPage,
    auth: false,
  },
];

function App() {
  useEffect(() => {
    if (window.location.hash) window.history.replaceState(null, "", " ");
    authStore.observeAuthChanges();
  }, []);

  let element = useRoutes(
    pages.map((page, index) => ({
      path: page.path,
      element: <page.component />,
      key: index,
    })),
  );

  return (
    <Layout>
      <Suspense fallback={<></>}>{element}</Suspense>
    </Layout>
  );
}

export default App;

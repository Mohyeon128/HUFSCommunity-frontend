import React, { lazy, Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import authStore from "@stores/auth-store";

import Layout from "@components/layout/Layout";

const DashboardPage = lazy(() => import("@pages/dashboard/DashBoardPage"));
const LoginPage = lazy(() => import("@pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("@pages/auth/RegisterPage"));
const MyPage = lazy(() => import("@pages/my/MyPage"));
const TotalPage = lazy(() => import("@pages/total/TotalPage"));
const TopicPage = lazy(() => import("@pages/topic/TopicPage"));
const PostPage = lazy(() => import("@pages/posts/PostsPage"));

import { AUTH_PATH, DASHBOARD_PATH, MY_PATH, POSTS_PATH, TOPIC_PATH, TOTAL_PATH } from "@constants/route-constants";

const pages = [
  {
    path: DASHBOARD_PATH,
    component: DashboardPage,
  },
  {
    path: AUTH_PATH.LOGIN,
    component: LoginPage,
  },
  {
    path: AUTH_PATH.REGISTER,
    component: RegisterPage,
  },
  {
    path: MY_PATH,
    component: MyPage,
  },
  {
    path: TOTAL_PATH,
    component: TotalPage,
  },
  {
    path: TOPIC_PATH,
    component: TopicPage,
  },
  {
    path: POSTS_PATH.WITHID,
    component: PostPage,
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

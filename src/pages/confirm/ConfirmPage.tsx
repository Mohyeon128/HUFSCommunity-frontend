import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";
import useAxios from "axios-hooks";

import PostPendingCard from "@components/PostPendingCard";
import Loading from "@components/Loading";
import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";
import { baseURL } from "@apis/common-api";
import { PostDTO } from "@_types/post-types";

const ConfirmPage = observer(() => {
  const [{ data: posts, loading: postsLoading }] = useAxios<PostDTO[]>({
    baseURL: baseURL,
    url: `/posts`,
  });

  return (
    <Wrapper>
      <PageTitle>게시물 관리자 검수 페이지</PageTitle>
      <PostList>
        {postsLoading ? (
          <Loading />
        ) : (
          posts &&
          posts
            .filter((post) => post.state === "pending")
            .map((post) => {
              return <PostPendingCard key={post.id} post={post} />;
            })
        )}
      </PostList>
    </Wrapper>
  );
});

export default ConfirmPage;

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  animation: `${fadeIn} 400ms cubic-bezier(0.45, 0.8, 0.65, 1)`,
});

const PageTitle = styled("h1", {
  heading1: true,
  marginTop: rem(36),
});

const PostList = styled("div", {
  columnCenteredY: true,
  paddingY: rem(42),
  gap: rem(12),
});

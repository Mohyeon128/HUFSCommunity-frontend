import React, { useState } from "react";
import _ from "lodash";
import useAxios from "axios-hooks";

import PostCard from "@components/PostCard";
import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";
import { PostDTO } from "@_types/post-types";
import { baseURL } from "@apis/common-api";

const TotalPage = () => {
  const [{ data: posts, loading: postsLoading }] = useAxios<PostDTO[]>({
    baseURL: baseURL,
    url: `/posts`,
  });

  return (
    <Wrapper>
      <PageTitle>최근 전송된 포스트</PageTitle>
      <PageSubtitle>최근 전송된 포스트를 가져왔어요!</PageSubtitle>
      <PostList>
        {postsLoading
          ? "로딩중.."
          : posts.map((post) => {
              return <PostCard key={post.id} post={post} />;
            })}
      </PostList>
    </Wrapper>
  );
};

export default TotalPage;

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  animation: `${fadeIn} 400ms cubic-bezier(0.45, 0.8, 0.65, 1)`,
});

const PageTitle = styled("h1", {
  heading1: true,
  marginTop: rem(36),
});

const PageSubtitle = styled("p", {
  marginTop: rem(8),
  color: "$gray800",
  fontSize: rem(15),
});

const PostList = styled("div", {
  columnCenteredY: true,
  paddingY: rem(42),
  gap: rem(12),
});

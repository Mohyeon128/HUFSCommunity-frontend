import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";
import useAxios from "axios-hooks";

import PostCard from "@components/PostCard";
import Loading from "@components/Loading";
import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";

import { PostDTO } from "@_types/post-types";
import { baseURL } from "@apis/common-api";
import { TopicDTO } from "@_types/topic-types";
import { TOPICS_PATH } from "@constants/route-constants";

const DashBoardPage = observer(() => {
  const [{ data: posts, loading: postsLoading }] = useAxios<PostDTO[]>({
    baseURL: baseURL,
    url: `/posts`,
  });

  const [{ data: timeline, loading: timelineLoading }] = useAxios<PostDTO[]>({
    baseURL: baseURL,
    url: `/users/1/timeline`,
  });

  const [{ data: topics, loading: topicsLoading }] = useAxios<TopicDTO[]>({
    baseURL: baseURL,
    url: `/users/1/subscriptions`,
  });

  return (
    <Wrapper>
      {authStore.isLoading ? (
        <Loading />
      ) : authStore.user ? (
        <>
          <PageTitle>반가워요 {authStore.user.name}님!</PageTitle>
          <PageSubtitle css={{ marginTop: rem(24), fontWeight: 600 }}>내 토픽</PageSubtitle>
          <TopicList>
            {!topicsLoading &&
              topics &&
              topics.map((topic) => {
                return (
                  <Topic key={topic.id} to={`${TOPICS_PATH.ROOT}/${topic.id}`}>
                    {topic.name}
                  </Topic>
                );
              })}
          </TopicList>
          <PostList>
            {!timelineLoading &&
              timeline &&
              timeline.map((post) => {
                return <PostCard key={post.id} post={post} />;
              })}
          </PostList>
        </>
      ) : (
        <>
          <PageTitle>최근 보낸 메일을 보여드릴게요</PageTitle>
          <PageSubtitle>로그인을 하고 메일로 토픽을 받아보세요!</PageSubtitle>
          <PostList>
            {!postsLoading &&
              posts &&
              posts.map((post) => {
                return <PostCard key={post.id} post={post} />;
              })}
          </PostList>
        </>
      )}
    </Wrapper>
  );
});

export default DashBoardPage;

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

const TopicList = styled("div", {
  rowCenteredY: true,
  flexWrap: "wrap",
  marginTop: rem(12),
  gap: rem(6),
});

const Topic = styled(Link, {
  paddingX: rem(12),
  paddingY: rem(6),
  color: "$gray700",
  fontSize: rem(14),
  backgroundColor: "$white",
  borderRadius: rem(24),
  border: "1px solid $gray300",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "$gray100",
  },
});

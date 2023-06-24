import React from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "axios-hooks";

import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";
import PostCard from "@components/PostCard";

import { TopicDTO } from "@_types/topic-types";
import { baseURL } from "@apis/common-api";
import { POSTS_PATH, TOPICS_PATH } from "@constants/route-constants";
import { PostDTO } from "@_types/post-types";
import Loading from "@components/Loading";

type ParamsType = {
  topicId: string;
};

const TopicPage = () => {
  const { topicId } = useParams<ParamsType>();

  const [{ data: topics, loading: topicsLoading }] = useAxios<TopicDTO[]>({
    baseURL: baseURL,
    url: `/topics`,
  });

  const [{ data: posts, loading: postsLoading }] = useAxios<PostDTO[]>({
    baseURL: baseURL,
    url: topicId ? `${POSTS_PATH.ROOT}?topicId=${topicId}` : POSTS_PATH.ROOT,
  });

  return (
    <Wrapper>
      <PageTitle>전체 토픽</PageTitle>
      <TopicList>
        {!topicsLoading &&
          topics.map((topic) => {
            return (
              <Topic
                to={`${TOPICS_PATH.ROOT}/${topic.id}`}
                css={{
                  color: topicId && topic.id === Number(topicId) ? `$black` : `$gray700`,
                  fontWeight: topicId && topic.id === Number(topicId) ? 600 : 400,
                  backgroundColor: topicId && topic.id === Number(topicId) ? `$gray200` : `$white`,
                  borderColor: topicId && topic.id === Number(topicId) ? `$gray500` : `$gray300`,
                }}
              >
                {topic.name}
              </Topic>
            );
          })}
      </TopicList>
      <PostList>
        {postsLoading ? (
          <Loading />
        ) : posts.length > 0 ? (
          posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })
        ) : (
          <PostEmpty>아직 아무런 글이 없어요</PostEmpty>
        )}
        {}
      </PostList>
    </Wrapper>
  );
};

export default TopicPage;

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  animation: `${fadeIn} 400ms cubic-bezier(0.45, 0.8, 0.65, 1)`,
});

const PageTitle = styled("h1", {
  heading3: true,
  marginTop: rem(36),
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

const PostList = styled("div", {
  columnCenteredY: true,
  paddingY: rem(42),
  gap: rem(12),
});

const PostEmpty = styled("p", {
  color: "$gray700",
  fontSize: rem(15),
  textAlign: "center",
});

import React from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "axios-hooks";

import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";
import { baseURL } from "@apis/common-api";
import { PostDTO } from "@_types/post-types";
import { POSTS_PATH, TOPIC_PATH } from "@constants/route-constants";
import dayjs from "dayjs";

type ParamsType = {
  postId: string;
};

const PostPage = () => {
  const { postId } = useParams<ParamsType>();

  const [{ data: post, loading: postLoading }] = useAxios<PostDTO>({
    baseURL: baseURL,
    url: `${POSTS_PATH.ROOT}/${postId}`,
  });

  return (
    <Wrapper>
      {postLoading
        ? "로딩중"
        : post && (
            <>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{dayjs(post.createdDate).format("YYYY년 MM월 DD일 HH:mm")}</PostDate>
              <TopicContiner>
                {post.topics.map((topic) => (
                  <Topic key={topic.id} to={`${TOPIC_PATH}/${topic.id}`}>
                    {topic.name}
                  </Topic>
                ))}
              </TopicContiner>
              <PostContent
                dangerouslySetInnerHTML={{ __html: post.content.replaceAll("\n", "<br/>").replaceAll(" ", "&nbsp;") }}
              />
            </>
          )}
    </Wrapper>
  );
};

export default PostPage;

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  animation: `${fadeIn} 400ms cubic-bezier(0.45, 0.8, 0.65, 1)`,
});

const PostTitle = styled("h1", {
  heading1: true,
  marginTop: rem(36),
});

const PostDate = styled("p", {
  marginTop: rem(12),
  fontSize: rem(13),
});

const PostContent = styled("p", {
  paddingY: rem(36),
  color: "$gray700",
  fontSize: rem(15),
});

const TopicContiner = styled("div", {
  rowCenteredY: true,
  marginTop: rem(24),
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

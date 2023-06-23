import React from "react";
import _ from "lodash";
import dayjs from "dayjs";

import { rem } from "polished";
import { styled } from "@styles/stitches.config";
import { PostDTO } from "@_types/post-types";
import { Link } from "react-router-dom";
import { POSTS_PATH, TOPIC_PATH } from "@constants/route-constants";

interface PostProps {
  post: PostDTO;
}

const Post = ({ post }: PostProps) => {
  return (
    <Card>
      <Link to={`${POSTS_PATH.ROOT}/${post.id}`} style={{ color: "#000000", transition: "all 0.2s ease-in-out" }}>
        <Title>{post.title}</Title>
      </Link>
      <Link to={`${POSTS_PATH.ROOT}/${post.id}`} style={{ color: "#000000", transition: "all 0.2s ease-in-out" }}>
        <Content>{_.truncate(post.content, { length: 256, omission: "..." })}</Content>
      </Link>
      <TopicContiner>
        {post.topics.map((topic) => (
          <Topic key={topic.id} to={`${TOPIC_PATH}/${topic.id}`}>
            {topic.name}
          </Topic>
        ))}
      </TopicContiner>
      <Time>{dayjs().toString()}</Time>
    </Card>
  );
};

export default Post;

const Card = styled("div", {
  width: "100%",
  padding: rem(24),
  color: "$black",
  borderRadius: rem(10),
  backgroundColor: "$white",
});

const Title = styled("h3", {
  heading2: true,
  cursor: "pointer",
});

const Content = styled("p", {
  marginTop: rem(8),
  color: "$gray700",
  fontSize: rem(15),
});

const TopicContiner = styled("div", {
  rowCenteredY: true,
  marginTop: rem(14),
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

const Time = styled("p", {
  marginTop: rem(12),
  fontSize: rem(13),
});

import React, { useState } from "react";

import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";

import { TopicDTO } from "@_types/topic-types";

const TopicPage = () => {
  const [selectedTopic, setSelectedTopic] = useState<TopicDTO | undefined>(undefined);
  const [topicList, setTopicList] = useState<TopicDTO[]>([]);

  return <Wrapper></Wrapper>;
};

export default TopicPage;

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  animation: `${fadeIn} 400ms cubic-bezier(0.45, 0.8, 0.65, 1)`,
});

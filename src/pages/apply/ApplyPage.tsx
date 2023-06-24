import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "axios-hooks";

import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";

import { TopicDTO } from "@_types/topic-types";
import { baseURL } from "@apis/common-api";
import axios from "axios";
import { PostDTO } from "@_types/post-types";

const ApplyPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [topicIds, setTopicIds] = useState<number[]>([]);

  const [{ data: topics, loading: topicsLoading, error }] = useAxios<TopicDTO[]>({
    baseURL: baseURL,
    url: `/topics`,
  });

  const isInputValid = title !== "" && content !== "" && topicIds.length > 0;

  const toggleTopicSelection = (topicId: number) => {
    setTopicIds((currentTopicIds) => {
      const isAlreadySelected = currentTopicIds.includes(topicId);
      if (isAlreadySelected) {
        return currentTopicIds.filter((id) => id !== topicId);
      } else {
        return [...currentTopicIds, topicId];
      }
    });
  };

  const handleApply = async () => {
    const response = await axios.post<PostDTO>(`${baseURL}/posts`, { title, content, topicIds });
    if (response.status.toString().startsWith("2")) {
      alert("등록되었습니다!");
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <PageTitle>등록 신청</PageTitle>
      <PageSubtitle>내 정보를 가장 효율적으로 사람들에게 전달하는 방법</PageSubtitle>
      <FormContainer>
        <TitleInput
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <ContentInput
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </FormContainer>
      <PageSubtitle css={{ marginTop: rem(24), color: "$black", fontSize: rem(18), fontWeight: 600 }}>
        토픽 설정
      </PageSubtitle>
      <TopicList>
        {!topicsLoading &&
          topics &&
          topics.map((topic) => {
            const isSelected = topicIds.includes(topic.id);
            return (
              <Topic
                key={topic.id}
                onClick={() => toggleTopicSelection(topic.id)}
                css={{
                  color: isSelected ? "$black" : "$gray700",
                  fontWeight: isSelected ? 600 : 400,
                  backgroundColor: isSelected ? "$gray200" : "$white",
                  borderColor: isSelected ? "$gray500" : "$gray300",
                }}
              >
                {topic.name}
              </Topic>
            );
          })}
      </TopicList>
      <NoticeText css={{ marginTop: rem(24) }}>&middot; 관리자의 승인 이후 메일로 발송돼요</NoticeText>
      <ApplySubmit
        css={{ marginTop: rem(12), cursor: `${isInputValid ? "pointer" : "normal"}` }}
        onClick={() => handleApply()}
        aria-invalid={!isInputValid}
      >
        신청하기
      </ApplySubmit>
    </Wrapper>
  );
};

export default ApplyPage;

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

const FormContainer = styled("div", {
  columnCentered: true,
  marginTop: rem(42),
  marginX: "auto",
  width: "100%",
});

const TitleInput = styled("input", {
  form: true,
  width: "100%",
  height: rem(64),
});

const ContentInput = styled("textarea", {
  form: true,
  width: "100%",
  height: rem(312),
  marginTop: rem(12),
  paddingY: rem(25),
  resize: "none",
});

const ApplySubmit = styled("button", {
  formSubmit: true,
  width: "fit-content",
  paddingX: rem(56),
  marginX: "auto",
  marginY: rem(36),
});

const NoticeText = styled("p", {
  color: "$gray800",
  fontSize: rem(15),
  fontWeight: 500,
});

const TopicList = styled("div", {
  rowCenteredY: true,
  flexWrap: "wrap",
  marginTop: rem(12),
  gap: rem(6),
});

const Topic = styled("button", {
  paddingX: rem(12),
  paddingY: rem(6),
  color: "$gray700",
  fontSize: rem(14),
  cursor: "pointer",
  backgroundColor: "$white",
  borderRadius: rem(24),
  border: "1px solid $gray300",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "$gray100",
  },
});

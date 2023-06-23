import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";

import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";
import { AUTH_PATH } from "@constants/route-constants";

const LoginPage = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    if (authStore.user) navigate("/");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isInputValid = validator.isEmail(email) && password !== "";

  const handleLogin = async () => {
    if (!isInputValid) return;
    const result = await authStore.login(email, password);

    if (result.successful) navigate("/");
    else alert("로그인을 실패했습니다");
  };

  return (
    <Wrapper>
      <FormContainer>
        <LoginTitle>로그인</LoginTitle>
        <LoginInput
          css={{ marginTop: rem(52) }}
          placeholder="이메일"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          css={{ marginTop: rem(12) }}
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginSubmit
          css={{ marginTop: rem(12), cursor: `${isInputValid ? "pointer" : "normal"}` }}
          onClick={() => handleLogin()}
          aria-invalid={!isInputValid}
        >
          로그인
        </LoginSubmit>
        <Divider />
        <GoToRegister to={AUTH_PATH.REGISTER}>회원가입</GoToRegister>
      </FormContainer>
    </Wrapper>
  );
});

export default LoginPage;

const Wrapper = styled("div", {
  columnCentered: true,
  width: "100%",
  height: "100%",
  animation: `${fadeIn} 400ms cubic-bezier(0.45, 0.8, 0.65, 1)`,
});

const FormContainer = styled("div", {
  columnCentered: true,
  marginX: "auto",
  width: "100%",
  maxWidth: rem(467),
});

const LoginTitle = styled("h1", {
  heading1: true,
});

const LoginInput = styled("input", {
  form: true,
  width: "100%",
  height: rem(64),
});

const LoginSubmit = styled("button", {
  formSubmit: true,
  width: "100%",
});

const Divider = styled("span", {
  width: "100%",
  hegiht: rem(1),
  marginY: rem(30),
  border: "1px solid rgba(226, 230, 237, 1)",
});

const GoToRegister = styled(Link, {
  columnCentered: true,
  formSubmit: true,
  color: "$black",
  cursor: "pointer",
  border: "1px solid #E2E6ED",
  backgroundColor: "$white",
});

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { observer } from "mobx-react-lite";
import authStore from "@stores/auth-store";

import { fadeIn } from "@styles/animations/fade-animation";
import { rem } from "polished";
import { styled } from "@styles/stitches.config";

const RegisterPage = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    if (authStore.user) navigate("/");
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const isInputValid =
    name !== "" && validator.isEmail(email) && password !== "" && passwordRepeat !== "" && password === passwordRepeat;

  const handleRegister = async () => {
    if (!isInputValid) return;
    const result = await authStore.register(email, password);

    if (result.successful) navigate("/");
    else alert("회원가입을 실패했습니다");
  };

  return (
    <Wrapper>
      <FormContainer>
        <RegisterTitle>회원가입</RegisterTitle>
        <RegisterInput
          css={{ marginTop: rem(52) }}
          placeholder="이름"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <RegisterInput
          css={{ marginTop: rem(12) }}
          placeholder="이메일"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <RegisterInput
          css={{ marginTop: rem(12) }}
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <RegisterInput
          css={{ marginTop: rem(12) }}
          placeholder="비밀번호 재입력"
          type="password"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
        <RegisterSubmit
          css={{ marginTop: rem(12), cursor: `${isInputValid ? "pointer" : "normal"}` }}
          onClick={() => handleRegister()}
          aria-invalid={!isInputValid}
        >
          회원가입
        </RegisterSubmit>
      </FormContainer>
    </Wrapper>
  );
});

export default RegisterPage;

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

const RegisterTitle = styled("h1", {
  heading1: true,
});

const RegisterInput = styled("input", {
  form: true,
  width: "100%",
  height: rem(64),
});

const RegisterSubmit = styled("button", {
  formSubmit: true,
  width: "100%",
});

import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { LoginForm as SignForm } from "./loginComponent";

export const SignupForm = styled(SignForm)`
  --test: ${(props) => props.length * 0.5 + 0.05}%;
  background: linear-gradient(black, var(--test), white);
`;

const SigninComponent = ({
  idLength,
  onChangeId,
  onChangePw,
  onChangePwRepeat,
  onClick,
  error,
}) => {
  return (
    <SignupForm length={idLength}>
      {/* {idLength} */}
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        onChange={onChangeId}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={onChangePw}
      />
      <input
        type="password"
        placeholder="비밀번호를 다시 입력하세요"
        onChange={onChangePwRepeat}
      />
      <h4>{error}</h4>
      <button onClick={onClick}>클릭해서 회원가입</button>
      <p>
        이미 계정이 있으신가요 <Link to="/">로그인</Link>
      </p>
    </SignupForm>
  );
};

export default SigninComponent;

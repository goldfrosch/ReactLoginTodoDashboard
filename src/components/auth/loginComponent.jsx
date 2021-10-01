import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginForm = styled.div`
  background-color: white;
  border-radius: 10px;
  align-items: center;
  vertical-align: center;
  text-align: center;
  padding-top: 50px;
  width: 300px;
  height: 400px;
  margin-top: 75px;
  margin-left: 40%;
  box-shadow: 2px 0 0 0 rgba(0, 0, 0, 0.2);
`;

const LoginComponents = ({ onChangeId, onChangePw, login, error }) => {
  return (
    <LoginForm>
      <form onSubmit={login}>
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
        <button type="submit" onClick={login}>
          클릭해서 로그인하시오
        </button>
        <p>
          계정이 없으시면 <Link to={`/signin`}>클릭</Link> 하세요
        </p>
        <h4>{error}</h4>
      </form>
    </LoginForm>
  );
};

export default LoginComponents;

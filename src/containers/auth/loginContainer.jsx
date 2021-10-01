import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginComponents from "../../components/auth/loginComponent";
import { loginAsyncAction } from "../../modules/login/login";

const LoginContainer = () => {
  const [id, setId] = useState("goldfrosch");
  const [pw, setPw] = useState("1234");

  const dispatch = useDispatch();

  const onChangeId = (e) => {
    e.target.name = e.target.value;
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    e.target.name = e.target.value;
    setPw(e.target.value);
  };

  const onLoginEvent = (e) => {
    e.preventDefault();
    dispatch(loginAsyncAction(id, pw));
  };

  return (
    <LoginComponents
      onChangeId={onChangeId}
      onChangePw={onChangePw}
      login={onLoginEvent}
      error=""
    />
  );
};

export default LoginContainer;

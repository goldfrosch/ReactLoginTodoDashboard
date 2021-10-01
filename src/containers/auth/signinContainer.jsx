import axios from "axios";
import React from "react";
import { useState } from "react";
import SigninComponent from "../../components/auth/signinComponent";

const SignIn = () => {
  const [id, setId] = useState("");
  const [idLength, setIdLength] = useState(0);
  const [pw, setPw] = useState("");
  const [repeatPw, setRepeatPw] = useState("");
  const [error, setError] = useState("");

  const onChangeId = (e) => {
    e.target.name = e.target.value;
    setId(e.target.value);
    setIdLength(e.target.value.length);
  };

  const onChangePw = (e) => {
    e.target.name = e.target.value;
    setPw(e.target.value);
  };

  const onChangePwRepeat = (e) => {
    e.target.name = e.target.value;
    setRepeatPw(e.target.value);
  };

  const onClickSignIn = () => {
    if (id === "" || pw === "" || repeatPw === "") {
      setError("입력칸을 다 채워주세요");
    } else if (pw !== repeatPw) {
      setError("비밀번호가 서로 다릅니다");
    } else {
      axios({
        method: "POST",
        url: "http://localhost:8000/register",
        data: {
          username: id,
          password: pw,
          passwordCheck: repeatPw,
        },
      })
        .then((res) => {
          console.log(res);
          document.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <SigninComponent
      idLength={idLength}
      onChangeId={onChangeId}
      onChangePw={onChangePw}
      onChangePwRepeat={onChangePwRepeat}
      onClick={onClickSignIn}
      error={error}
    />
  );
};

export default SignIn;

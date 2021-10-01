import React from "react";
import styled from "styled-components";
import { Pallete } from "../../styles/Pallete";

const TodoForm = styled.div`
  background-color: white;
  width: 300px;
  height: 50px;
  margin: 5px;
  display: grid;
  grid-template-columns: 50px 200px 50px;
  .toggle {
    width: 40px;
    height: 40px;
    border: 0;
    &:hover {
      background-color: #12d26e;
      color: white;
    }
  }
  .delete {
    width: 40px;
    height: 40px;
    border: 0;
    &:hover {
      background-color: red;
      color: white;
    }
  }
  .checked {
    color: ${Pallete.checkText};
    text-decoration: line-through;
  }

  h3 {
    text-align: center;
    vertical-align: center;
  }
`;

const TodoComponents = ({ active, content, check, remove }) => {
  return (
    <>
      <TodoForm>
        <button className="toggle" onClick={check}>
          체크
        </button>
        <h3 className={active ? "checked" : ""}>{content}</h3>
        <button className="delete" onClick={remove}>
          삭제
        </button>
      </TodoForm>
    </>
  );
};

export default TodoComponents;

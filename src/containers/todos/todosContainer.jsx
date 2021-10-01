import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAction,
  checkAction,
  removeAction,
  createAction,
} from "../../modules/todos/todos";
import TodoComponents from "../../components/todos/todos";
import { logoutAsyncAction } from "../../modules/login/login";

import styled from "styled-components";
import GraphComponents from "../../components/todos/graph";

const TodoMainContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px, repeat(4, 1fr);

  .head {
    background-color: red;
    grid-column: 1 / 5;
  }
  .option {
    display: flex;
  }
  .check {
    background-color: white;
  }

  .graph {
    background-color: blue;
    grid-row: 2 / 4;
  }

  .main {
    background-color: yellow;
    grid-column: 2 / 5;
    grid-row: 2 / 4;
  }
`;

const TodoContainers = () => {
  const [content, setContent] = useState("");
  const todos = useSelector((state) => state.todos);
  const vote1 = todos.filter((t) => t.active === true).length;
  const vote2 = todos.filter((t) => t.active === false).length;
  const dispatch = useDispatch();

  //컴포넌트 업데이트 마다 출력
  useEffect(() => {
    dispatch(getAction());
  }, [dispatch]);

  const onWrite = (e) => {
    e.target.name = e.target.value;
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (content === "") return console.log("값이 없습니다");
    dispatch(createAction(content));
    setContent("");
  };

  const logout = () => dispatch(logoutAsyncAction());

  const checkAllToggle = (e) => {
    todos.map((m) =>
      m.active === e.target.checked ? null : dispatch(checkAction(m.id))
    );
  };

  const removeChecked = () => {
    todos.map((m) => (m.active ? dispatch(removeAction(m.id)) : null));
  };

  const activeToggle = (id) => dispatch(checkAction(id));
  const removeClick = (id) => dispatch(removeAction(id));

  return (
    <>
      <TodoMainContainers>
        <div className="head">
          <form onSubmit={onSubmit}>
            <input
              placeholder="Write to do"
              onChange={onWrite}
              value={content}
            />
            <button type="submit" onClick={onSubmit}>
              input
            </button>
          </form>
          <div className="option">
            <button onClick={logout}>로그아웃</button>
            <div className="check">
              <label>
                <span>전체 체크하기:</span>
                <input type="checkbox" onChange={checkAllToggle} />
              </label>
              <button onClick={removeChecked}>체크 삭제</button>
            </div>
          </div>
        </div>

        <div className="graph">
          <GraphComponents vote1={vote1} vote2={vote2} />
        </div>

        <div className="main">
          {todos.map((t) => (
            <TodoComponents
              key={t.id}
              content={t.content}
              active={t.active}
              check={() => activeToggle(t.id)}
              remove={() => removeClick(t.id)}
            />
          ))}
        </div>
      </TodoMainContainers>
    </>
  );
};

export default TodoContainers;

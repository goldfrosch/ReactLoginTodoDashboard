import React from "react";
import styled from "styled-components";

const GraphForm = styled.div`
  background-color: white;
  display: grid;
  width: 400px;
  grid-template-columns: 400px;
  grid-template-rows: repeat(6, 1fr);
  vertical-align: bottom;

  .graph1 {
    --vote1: ${(props) => props.vote1 * 10 + 20}px;
    background-color: red;
    width: var(--vote1);
    max-width: 400px;
    height: 40px;
    grid-row: 2 / 3;
    transition-duration: 1s;
    transition-timing-function: ease-out;
  }

  .graph2 {
    --vote2: ${(props) => props.vote2 * 10 + 20}px;
    background-color: blue;
    width: var(--vote2);
    max-width: 400px;
    height: 40px;
    grid-row: 4 / 5;
    transition-duration: 1s;
    transition-timing-function: ease-out;
  }

  .result {
    background-color: lightcoral;
    text-align: center;
    grid-row: 6 / 7;
  }
`;

const DonutForm = styled.div`
  --vote: ${(props) => (props.vote2 / (props.vote1 + props.vote2)) * 100}%;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  background: conic-gradient(#8b22ff 0% var(--vote), #ffc33b var(--vote) 100%);
  display: flex;
  //가로 정렬: display: flex후 justify-content: center로 가운데 정렬하기
  justify-content: center;
  margin: auto 0;
  .center {
    //세로 정렬: display: flex후 margin: auto 0;으로 가운데 정렬하기
    margin: auto 0;
    display: flex;
    background-color: white;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    justify-content: center;
    .centerTitle {
      text-align: center;
      margin: auto 0;
    }
  }
`;

const GraphComponents = ({ vote1, vote2 }) => {
  let voteTotal = vote1 + vote2;
  let votePer1 = Math.round((vote1 / voteTotal) * 100);
  let votePer2 = Math.round((vote2 / voteTotal) * 100);
  return (
    <>
      <GraphForm vote1={vote1} vote2={vote2}>
        <div className="graph1">{vote1}</div>
        <div className="graph2">{vote2}</div>
        <div className="result">
          총 합 : {voteTotal} | 1번: {votePer1}% | 2번: {votePer2}%
        </div>
      </GraphForm>
      <DonutForm vote1={vote1} vote2={vote2}>
        <div className="center">
          <div className="centerTitle">
            1번: {votePer1}% | 2번: {votePer2}%
          </div>
        </div>
      </DonutForm>
    </>
  );
};

export default GraphComponents;

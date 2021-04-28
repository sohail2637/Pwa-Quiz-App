import React, { useState, useEffect } from "react";
import "../App.css";
import TestComponent from "./TestComponent";
import { QuesLevel } from '../Types/QuizeTypes';


interface queslevel {
  quslevel: string;
}

  
const Main = () => {
  const [loding, setLoding] = useState(false);
  const [teststate, setTestState] = useState(false);
  const [totalquestion, setTotalQues] = useState();
  const [questionLevel, setLevel] = useState('');

  return (
    <div className="mainpgcontainer flxbox">
      {!teststate ? (
        <div className="startingContainer flexcol">
          <div className="testtitle ">
            <h1>General tests for you</h1>
          </div>
          <div className="instraccotaier">
            <ol>
              <li>Each qusetion contain 1 marks</li>
              <li>Don't negtive Marking</li>
              <li>If a question is false then subtract 1 Marks </li>
            </ol>
          </div>
          <div className=" flxcol">
            <h2>Total Question:&nbsp;{}</h2>
            <div className="flxbox">
              <h2>Level Of question is : &nbsp;</h2>
              <label>
                <input
                  type="radio"
                  name="option"
                  value="easy"
                  onClick={(e: any) => setLevel(e.target.value)}
                />
                Easy
              </label>
              <label>
                <input
                  type="radio"
                  name="option"
                  value="hard"
                  onClick={(e: any) => setLevel(e.target.value)}
                  checked
                />
                Hard
              </label>
            </div>
          </div>
          <div className="startconatiner">
            <h4>If you agree then start</h4>
            <button className="btn" onClick={() => setTestState(true)}>
              Start
            </button>
          </div>
        </div>
      ) : (
          <TestComponent />
          // quslevel={questionLevel}
      )}
    </div>
  );
};

export default Main;

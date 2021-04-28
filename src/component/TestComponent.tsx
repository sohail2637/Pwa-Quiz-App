import React, { useEffect, useState } from "react";
import { Fetchdata } from "../services/Quize-Services";
import { QuestionsType } from "../Types/QuizeTypes";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const spintype={ visible:'boolean', color:'string', stroke:'any', radius:'number',  }

const TestComponent = () => {
  // { quslevel } = { props: String }
  const [quiz, setQuize] = useState<QuestionsType[]>([]);
  const [currentstep, setCurrentstep] = useState(0);
  const [selectans, setSelectans] = useState("");
  const [score, setScore] = useState(0);
  const [scoreres, setScoreres] = useState(false);


  // console.log(quslevel);
  
  useEffect(() => {
    let fetching = async () => {
      const question = await Fetchdata(10, "easy");
      console.log(question);

      setQuize(question);
    };
    fetching();
  }, []);

  const nextquestion = (e: any) => {
    e.preventDefault();
    setCurrentstep(currentstep + 1);
    if (quiz.length - 1 === currentstep) {
      setScoreres(true);
    }
    console.log("length is....<", quiz.length);
  };
  const handleselect = (e: any) => {
    setSelectans(e.target.value);

    if (e.target.value === quiz[currentstep].answers) {
      setScore(score + 1);
    }
    console.log(
      "ans....>" +
        quiz[currentstep].answers +
        "...select ans.....>" +
        e.target.value +
        "...score.....>" +
        score
    );
  };

  if (!quiz.length) {
    return (
      <div>
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <>
      {!scoreres ? (
        <div className="startingContainer flxbox">
          <form onSubmit={(e) => nextquestion(e)}>
            <div className="testtitle">
              <h1>{quiz[currentstep].question}</h1>
            </div>
            <div className="instraccotaier flexcol">
              {quiz[currentstep].options.map(
                (option: string, index: number) => (
                  <div key={index} className="quizOption">
                    <label>
                      <input
                        type="radio"
                        name="option"
                        value={option}
                        required
                        checked={selectans === option}
                        onChange={handleselect}
                      />
                      {option}
                    </label>
                  </div>
                )
              )}
            </div>
            <button className="btn" type="submit">
              Next
            </button>
          </form>
        </div>
      ) : (
        <div className="startingContainer flexcol">
          <div className="testtitle flexbox ">
            <h1 className="resulttitle">
              your Score : &nbsp;{score}/&nbsp;{quiz.length}
            </h1>
            {quiz.length * 0.5 < score ? (
              <h3 className="passstudent">Pass</h3>
            ) : (
              <h3 className="failstudent">Fail</h3>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TestComponent;

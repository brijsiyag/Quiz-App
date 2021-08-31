import React from "react";
import { useState, useEffect } from "react";

const Question = ({ data, givenAns, setAns, setQuizEnded }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [time, settime] = useState(0);
  const [question, setQuestion] = useState(data[questionNumber]);
  const nextBtn = () => {
    settime(0);
    if (questionNumber >= data.length - 1) {
      setQuizEnded(true);
      return;
    }
    setQuestionNumber((prev) => {
      return prev + 1;
    });
    setQuestion(data[questionNumber + 1]);
    givenAns.push([]);
    document.querySelectorAll(".option").forEach((element) => {
      element.classList.remove("option-selected");
    });
  };
  const optionClick = (e) => {
    if (data[questionNumber].type === "SCQ") {
      document.querySelectorAll(".option").forEach((element) => {
        element.classList.remove("option-selected");
      });
      document.getElementById(e.target.id).classList.add("option-selected");
      givenAns[questionNumber] = [e.target.id];
      setAns(givenAns);
      console.log("SCQ");
      return;
    }
    // console.log(e.target.id);
    document.getElementById(e.target.id).classList.toggle("option-selected");
    if (
      givenAns[questionNumber].find((element, index) => {
        if (element == e.target.id) {
          givenAns[questionNumber].splice(index, 1);
          return true;
        }
        return false;
      })
    ) {
      console.log("Deleted");
    } else {
      givenAns[questionNumber].push(e.target.id);
    }
    setAns(givenAns);
  };
  if (time > 15) {
    nextBtn();
  }
  if (time > 5) {
    document.querySelector(".notification").style.right = "10px";
  }
  if (time > 10) {
    document.querySelector(".notification").style.right = "-100%";
  }
  useEffect(() => {
    setInterval(() => {
      settime(prev => { return prev + 1; })
      console.log(time, "lala");
    }, 1000);
  }, [])
  return (
    <div className="quiz">
      {time > 4 && <div className="notification">10sec Remaining</div>}
      <div className="question-container">
        <div className="question-header">
          <h1 className="question-count">Question No. {questionNumber + 1}</h1>
          <h3 className="timer">Time Remaining : {15 - time}s</h3>
        </div>
        <div className="question-body">
          <h2 className="main-question">{question.question}</h2>
          <div className="options-container">
            {question.options.map((option, index) => {
              return (
                <h3 className="option" id={index + 1} onClick={optionClick}>
                  {option}
                </h3>
              );
            })}
          </div>
        </div>
        <div className="question-footer">
          {question.hint && <h4 className="hint">Hint : {question.hint}</h4>}
          <button onClick={nextBtn} className="next-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;

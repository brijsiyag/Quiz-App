import React from "react";

const ShowAnswers = ({ givenAns, data }) => {
  const [rightAnswers, setRightAnswers] = React.useState(0);
  const dataCompare = (data1, data2) => {
    data1.sort();
    data2.sort();
    if (data1.length != data2.length) {
      return false;
    }
    for (let i = 0; i < data1.length; i += 1) {
      if (data1[i] != data2[i]) {
        return false;
      }
    }
    return true;
  };
  const showWrongAns = () => {
    for (let index = 0; index < data.length; index++) {
      if (dataCompare(givenAns[index], data[index].answer)) {
        setRightAnswers(prev => { return prev + 1 });
      }
      else {
        document.querySelectorAll(".question-container-in-answers")[index].classList.add("wrong");
      }
    }
  }
  React.useEffect(() => {
    showWrongAns();
  }, [])
  return (
    <div className="answers">
      <div className="right-answer-counter">Marks : {rightAnswers + "/" + data.length}</div>
      {data.map((element, index) => {
        return (
          <div className="question-container-in-answers">
            <h2 className="question">{index + 1 + ". " + element.question}</h2>
            <div className="options-container">
              {element.options.map((option) => {
                return <h3 className="option" >{option}</h3>;
              })}
            </div>
            {element.explaination != null && <div className="explaination"><span style={{ fontSize: "1.2rem" }}>Explaination : </span>{element.explaination}</div>}
          </div>
        );
      })}
    </div>
  );
};
export default ShowAnswers;

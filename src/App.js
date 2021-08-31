import Data from "./Data";
import Question from "./Question";
import { useState } from "react";
import ShowAnswers from "./ShowAnswers";

function App() {
  const [givenAns, setGivenAns] = useState([[]]);
  const [quizEnded, setQuizEnded] = useState(false);
  return (
    <div>
      {!quizEnded ? (
        <Question
          data={Data}
          setAns={setGivenAns}
          givenAns={givenAns}
          setQuizEnded={setQuizEnded}
        />
      ) : (
        <ShowAnswers data={Data} givenAns={givenAns} />
      )}
    </div>
  );
}
export default App;

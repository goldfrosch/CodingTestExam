import Brute from "./questionType/brute/brute";
import Greedy from "./questionType/greedy/greedy";
import Recursion from "./questionType/recursion/recursion";
import Sort from "./questionType/sort/sort";
import StackExam from "./questionType/stack-queue/stack";

function App() {
  return (
    <div className="App">
      <Recursion />
      <StackExam />
      <Greedy />
      <Brute />
      <Sort />
    </div>
  );
}

export default App;

import Brute from "./questionType/brute/brute";
import Greedy from "./questionType/greedy/greedy";
import Sort from "./questionType/sort/sort";
import StackExam from "./questionType/stack-queue/stack";

function App() {
  return (
    <div className="App">
      <StackExam />
      <Greedy />
      <Brute />
      <Sort />
    </div>
  );
}

export default App;

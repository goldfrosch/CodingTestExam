import React from 'react';

const StackExam = () => {

  const stackTest1 = () => {
    let progresses = [93, 30, 55];
    let speeds = [1, 30, 5];

    //0번째의 연산을 하려면 초기값 설정 없이는 NaN으로 나오기 때문에 0을 처음에 지정함
    let answer = [0];
    //map함수를 통해서 배열에 각각의 요소마다 걸리는 날짜를 표기함
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    console.log(days);
    
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }
    
    console.log(answer);
  }

  return (
    <div>
      <button onClick={stackTest1}>스택-큐 문제 1번</button>
    </div>
  )
}

export default StackExam;
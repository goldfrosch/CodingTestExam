import React from 'react';

const StackExam = () => {

  //https://programmers.co.kr/learn/courses/30/lessons/42586
  const stackTest1 = () => {
    let progresses = [10, 40, 55, 15];
    let speeds = [40, 10, 45, 9];

    //0번째의 연산을 하려면 초기값 설정 없이는 NaN으로 나오기 때문에 0을 처음에 지정함
    let answer = [0];
    //map함수를 통해서 배열에 각각의 요소마다 걸리는 날짜를 표기함
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let maxDay = days[0];
    //for문 시전중...
    for(let i = 0, j = 0; i< days.length; i++){
      //처음 날짜와 같거나 더 작을 때는 이미 완료되어서 날짜에 추가함
      //처음 완료기준으로 무조건 0번째 번호는 완료된 +로 들어감
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            //조건에 충족하지 못할 경우는 다음으로 넘겨야해서
            //j의 값을 증가시키고 그곳에 1을 넣어 그곳에서 완료한다고 선언
            answer[++j] = 1;
        }
    }
    
    console.log(answer);
  }

  //https://programmers.co.kr/learn/courses/30/lessons/42587
  const stackTest2 = () => {
    let priorities = 	[3, 6, 1, 4];
    let location = 2;

    let count = 0;
    let target = location;

    while(priorities.length > 0) {
      let compareNum = priorities.shift();

      if (
        priorities.some((num) => {
          return num > compareNum;
        })
      ) {
        priorities.push(compareNum);
      } 
      else {
        count++;
        if (target===0){
            return count
        }
      }
      
      if (target === 0) target = priorities.length - 1;
      else target--;
      console.log(priorities);
    }
  }
  return (
    <div>
      <button onClick={stackTest1}>스택-큐 문제 1번</button>
      <button onClick={stackTest2}>스택-큐 문제 2번</button>
    </div>
  )
}

export default StackExam;
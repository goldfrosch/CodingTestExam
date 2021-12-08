import React from 'react';

const Sort = () => {
  const sort_1 = () => {
    let array = [1, 5, 2, 6, 3, 7, 4];
    let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

    let answer = [];
    for(let i = 0; i < commands.length;i++) {
      let testArray = array.slice(commands[i][0] - 1, commands[i][1]).sort((a,b) => {return a - b});
      answer.push(testArray[commands[i][2] - 1]);
    }
  
    console.log(answer);
  }

  const sort_2 = () => {
    let numbers = [4, 10, 6, 15];
    let answer = '';
    let strings = numbers.map(num => num + "");
    answer = strings.sort((a, b) => (b + a) - (a + b)).join("");
    
    console.log(answer[0] === "0" ? "0" : answer);
  }

  const sort_3 = () => {
    let citations = [3,5,7,1,2,3,3,6,6];
    let answer = 0;
    
    citations.sort((a,b) => {return a - b});
    for(let i = 0; i < citations.length;i++) {
        answer = -1;
        for(let j = 0; j < citations.length;j++) {
            if(citations[i] < citations[j]) {
                answer++;
            }
        }
        if(answer === citations[i]) {
            break;
        }
    }
    
    console.log(answer);
  }
  return (
    <div>
      <button onClick={sort_1}>정렬 버튼 1번</button>
      <button onClick={sort_2}>정렬 버튼 2번</button>
      <button onClick={sort_3}>정렬 버튼 3번</button>
    </div>
  )
}

export default Sort;
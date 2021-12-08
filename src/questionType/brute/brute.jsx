import React from 'react';

const Brute = () => {
  //https://programmers.co.kr/learn/courses/30/lessons/42840
  const brute_1 = () => {
    let answers = [3,3,1,1,2,2,4,4,5,5,1,1,2,2,2,2,4,4,5,5];
    let answer_count = [0,0,0];
    let test = [];
    
    for(let i = 0;i < answers.length;i++) {
        let pro_a = (i + 1) % 5 === 0 ? 5 : (i + 1) % 5;
        if(answers[i] === pro_a) {
            answer_count[0]++;
        }
        
        let pro_b = (i + 1) % 2 === 1 ? 
            2 : Math.floor((i + 1) / 2 % 4) === 0 ?
                5 : Math.floor((i + 1) / 2 % 4) === 1 ?
                  1 : Math.floor((i + 1) / 2 % 4) + 1;
        if(answers[i] === pro_b) {
            answer_count[1]++;
        }
        
        let pro_c = Math.ceil((i + 1) / 10 * 5);
        switch(Math.ceil((i + 1) / 10 * 5)) {
            case 1:
                pro_c = 3;
                break;
            case 2:
                pro_c = 1;
                break;
            case 3:
                pro_c = 2;
                break;
            default:
                break;
        }
        if(answers[i] === pro_c) {
            answer_count[2]++;
        }
    }
    let max = Math.max(...answer_count);
    for(let i = 0;i < answer_count.length;i++){
        if(answer_count[i] === max) {
            answer_count[i] = i + 1;
        } else {
            answer_count[i] = -1;
        }
    }
    
    answer_count = answer_count.filter(num => num > 0);
    
    for(let i = 0; i < 100;i++) {
      let pro_c = Math.ceil((i + 1) / 10 * 5) % 5;
        switch(Math.ceil((i + 1) / 10 * 5) % 5) {
            case 0:
                pro_c = 5;
                break;
            case 1:
                pro_c = 3;
                break;
            case 2:
                pro_c = 1;
                break;
            case 3:
                pro_c = 2;
                break;
            default:
                break;
        }
        test.push(pro_c);
    }
    console.log(test);
  }

  const brute_2 = () => {
    let brown = 24;
    let yellow = 24;
    let answer = [0, 0];
    
    let sum = brown + yellow;
    for(let i = sum - 1; i > 0;i--) {
      if(sum % i !== 0) continue;

      if(((sum / i) - 2) * (i - 2) === yellow) {
        answer = [sum / i , i];
        break;
      }
    }
    answer.sort((a,b) => {return b - a});

    console.log(answer);
  }

  return (
    <div>
      <button onClick={brute_1}>브루트 1번 문제</button>
      <button onClick={brute_2}>브루트 2번 문제</button>
    </div>
  )
}

export default Brute;
import React from 'react';

const Greedy = () => {
  const greedy_1 = () => {
    let n = 10;
    let lost = [3, 9, 8];
    let reserve = [2, 4, 3, 5, 1];

    let i = 0;
    let lost_filter = lost.filter(function(a) {
      return reserve.indexOf(a) === -1;
    });

    let reserve_filter = reserve.filter(function(a) {
      return lost.indexOf(a) === -1;
    })

    let answer = n - lost_filter.length;

    while(i < reserve_filter.length) {
      if(lost_filter.indexOf(reserve_filter[i] - 1) !== -1) {
        lost.splice(lost_filter.indexOf(reserve_filter[i] - 1), 1);
        answer += 1;
      } else if(lost_filter.indexOf(reserve_filter[i] + 1) !== -1) {
        lost.splice(lost_filter.indexOf(reserve_filter[i] + 1), 1);
        answer += 1;
      }
      i++;
    }

    console.log(answer);
  }

  return (
    <div>
      <button onClick={greedy_1}>그리디 문제 1번</button>
    </div>
  )
}

export default Greedy;
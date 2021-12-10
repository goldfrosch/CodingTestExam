import React from 'react';

const DFS = () => {
  //https://programmers.co.kr/learn/courses/30/lessons/43165
  const DFS_1 = () => {
    let numbers = [1, 1, 1, 1, 1];
    let target = 3;
    let answer = 0;
    
    const getRandomValue = (index, sum) => {
        if(index === numbers.length) {
            if(sum === target) {
                answer++;
            }
            return;
        }
        getRandomValue(index + 1, sum + numbers[index]);
        getRandomValue(index + 1, sum - numbers[index]);
    }
    
    getRandomValue(0, 0);

    console.log(answer);
  }

  //
  const DFS_2 = () => {
    let tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]];

    let answer = [];
    const result = [];
    const visited = [];

    //처음 티겟을 알파벳 순으로 선 정렬
    tickets.sort();
    
    //현재 티켓의 갯수를 반환
    const len = tickets.length;

    //DFS 재귀 함수 선언
    const dfs = (str, count) => {
      //일단 초반에 준것은 무조건 넣고 본다
      result.push(str);
      
      //현재 진행되고 있는 index랑 처음 티켓 갯수가 같을 시 정지
      if(count === len) {
        answer = result;
        return true;
      }
      
      for(let i = 0; i < len; i++) {
        //visited 배열에 값을 넣어 현재 방문했는지 상황을 저장한다
        if(!visited[i] && tickets[i][0] === str) {
          visited[i] = true;
          //다음 갈 곳이 존재할 때 true로 return
          if(dfs(tickets[i][1], count+1)) return true;
          
          visited[i] = false;
        }
      }
      //다음에 갈 곳이 없어 pop으로 넣엇던 곳 방 빼고
      result.pop();
      //return FALSE!
      return false;
    }
    
    dfs("ICN", 0);
    
    console.log(answer);
  }
  return (
    <div>
      <button onClick={DFS_1}>DFS, BFS 1번</button>
      <button onClick={DFS_2}>DFS, BFS 2번</button>
    </div>
  )
}

export default DFS;
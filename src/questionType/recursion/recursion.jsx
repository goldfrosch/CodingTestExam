import React from 'react';

const Recursion = () => {
  let total = 5;
  const recursion_1 = (id) => {
    let blank = "";
    
    for(let i = 0; i < total - id;i++) {
      blank += "*";
    }
    console.log(blank + "HI!");
    if(total - id !== total) {
      recursion_1(id - 1);
    }
    else {
      console.log("완료")
    }
  }

  return (
    <div>
      <button onClick={() => recursion_1(total)}>재귀함수 문제 1번</button>
    </div>
  )
}

export default Recursion;
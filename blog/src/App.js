/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0); // 따봉변경 : state 변경 함수, 이걸 써야 html 재렌더링이 됨

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목]
        글제목변경(copy.sort())
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        // 글제목[0] = '여자 코트 추천' // 원본을 변형하는건 좋지 않은 방법
        // let copy = 글제목; // array, object 형은 래퍼런스 타입 데이터라서 포인터를 복사하기 때문에 (글제목 == copy)는 True
        let copy = [...글제목]; // ... => 괄호를 벗기기, [] => 새로운 괄호 씌우기 즉, 독립적인 data가 생성됨
        copy[0] = '여자 코트 추천' // 이런식으로 shallow copy 또는 deep copy 후 반환하는게 좋은 방법이다. 
        글제목변경(copy);
      }
      }>글제목 수정</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <p>2022-07-07 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2022-07-08 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2022-07-09 발행</p>
      </div>
      <Modal/>
    </div>
  );
}
// const Modal = () => { // 이런식으로 작성해도 됨
//   return (
//     <div></div>
//   )
// }
function Modal(){ // 하나의 div만 담을 것
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "강남 우동 맛집";
  let [글제목, setPost1] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0); // 따봉변경 : state 변경 함수, 이걸 써야 html 재렌더링이 됨

  // function 함수(){
  //   console.log(1);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        {/* <h4>{ 글제목[0] } <span onClick={ 함수 }>👍</span> { 따봉 } </h4> */}
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
    </div>
  );
}

export default App;

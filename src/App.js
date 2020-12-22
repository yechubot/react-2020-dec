
import './App.css';

function App() {
  const title = 'welcome to the new blog';
  const likes = 50; 
  // react가 string으로 바꿔서 보여줌 
  // const person = {name: 'yoshi',age:30};
  //  boolean, 배열은 {변수}로 못보여줌 

  const link = "http://www.google.com";

  return ( // 보통 jsx 템플릿 
    // {}를 사용하여 변수 값을 나타낼 수 있음
    

    <div className="App">
      <div className="content">
        <h1>{title}</h1> 
        <p>liked {likes} times</p>
        {/* <p>{person}</p> */}

        <p>{10}</p>
      <p>{"hello you!! "}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random()*10}</p>

      <a href={link}>Google Site</a>
      {/*dynamic value => 앞에 변수로 선언해서 사용  */}
      </div>
    </div>
  );
}

//항상 마지막에 export 하여 app component를 사용함 
export default App;

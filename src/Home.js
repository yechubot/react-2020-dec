const Home = () => {

    const handleClick = (e) => {//기본으로 이벤트를 첫번쨰 argument로 받음 
        console.log('hello, ninjas', e);
    }

    const handleClickAgain = (name,e) => { // parameter: name 
        console.log('hello '+ name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            {/* handleClick() 은 바로 invoke 하는거, reference만 달면 됨 */}
            <button onClick={(e) => {// 유저가 클릭시 fire 되는 function - 익명함수를 만들었어..?
            handleClickAgain('mario',e);// 한줄이라 {}생략가능 
            // 바로 invoke 안되는 이유는 클릭시 function이 fire되기 때문에 
            }}>Click me again</button>
       </div>
     );
    }
export default Home;

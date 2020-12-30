import { useState } from 'react';
//useState hook을 사용하여 리액트가  state 변동하면 렌더링 할 수 있게..?
//reactive value가 필요하면 이를 사용함 
const Home = () => {
    //let name = 'mario';
    const [name, setName] = useState('mario');
    const[age, setAge] = useState(25); //initial value
    //value, setFunction 
    const handleClick = () => {
        setName('luigi');
        setAge('30');
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old </p>
            
            <button onClick={handleClick}>Click me</button>

        </div>
    );
}
export default Home;

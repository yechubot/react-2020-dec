import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null); //fetch data 가 성공적으로 되면 업뎃할 것임 

    useEffect(()=> {
        fetch('http://localhost:8000/blogs')
        .then(res=> {
           return res.json()
        }) // data를 받고 나면 then() 실행됨. res는 데이터임 (response object)
        .then((data)=> {// 그리고 나서 실행되게 then() 메소드
            setBlogs(data);
        })
    },[]);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs = {blogs} title = "All Blogs !"/>}
       </div>
    // BlogList에 blogs를 넘기고 BlogList.js에서는 처음에 실행할 때는 null을 받아버림
    //그러면 data를 읽어온다음에 넘겨야 하는데 여기서 자바 스크립트를 이용한다.
    //자바 스크립트를 이용하기 위해서 {} 를 써주고 안에 blogs &&를 넣어주어 조건문을 표현한다.
    //위의 의미는 왼쪽이 false면 오른쪽을 표시하지 않는다. 하지만 true 면 output된다.
    );
    }

export default Home;

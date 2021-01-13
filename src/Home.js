import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null); //fetch data 가 성공적으로 되면 업뎃할 것임 

    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
        fetch('http://localhost:3000/blogs')
        .then(res=> {
            //console.log(res);
            if(!res.ok){//when not -- fetch is okay and we get data back 
                throw Error('could not fetch the data for that resource');
            }
           return res.json()
        }) // data를 받고 나면 then() 실행됨. res는 데이터임 (response object)
        .then((data)=> {// 그리고 나서 실행되게 then() 메소드
            setBlogs(data);
            setIsPending(false); //데이터 받을때는 로딩이 false됨 
            setError(null); //데이터 잘 전달되면 메시지 안보이게 
        })
        .catch(err=>{
        //    console.log(err.message); //에러 catch하기 
        setError(err.message);
        setIsPending(false); //에러일때 로딩 메시지 안뜨도록 
        })
    },[]);

    return ( //에러나면 메세지 뜨게 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs !"/>}
       </div>
    // BlogList에 blogs를 넘기고 BlogList.js에서는 처음에 실행할 때는 null을 받아버림
    //그러면 data를 읽어온다음에 넘겨야 하는데 여기서 자바 스크립트를 이용한다.
    //자바 스크립트를 이용하기 위해서 {} 를 써주고 안에 blogs &&를 넣어주어 조건문을 표현한다.
    //위의 의미는 왼쪽이 false면 오른쪽을 표시하지 않는다. 하지만 true 면 output된다.
    );
    }

export default Home;

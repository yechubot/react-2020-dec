import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
    {title:'my mew website', body: 'lorem ipsum...', author:'mario', id:1},
    {title:'welcome party', body: 'lorem ipsum...', author:'mario', id:2},
    {title:'my web dev top tips', body: 'lorem ipsum...', author:'ninja', id:3}
    ]);

    const handleDelete = (id)=> {
         const newBlogs = blogs.filter(blog => blog.id !== id) 
            setBlogs(newBlogs);
        }

    const[name, setName] = useState('mario');
    //렌더링 될때마다 실행되는 함수 
    //즉 데이터 바뀔때마다 계속 실행됨 (run every render!!! )
    useEffect(()=> {
        console.log('use effect ran');
        //console.log(blogs);
        console.log(name);
    },name);
    // useEffect -> useState -> rerender -> useEffect ->  continuous loop ...
    //렌더될떄마다 실행되지 않고, 특정할 떄만 실행되게 하려면 dependency array 라는 걸 사용하면 된다.
    // 두번쨰 인자로 []empty array를 넣어주면 처음에만 useEffect가 실행된다.
    // 특정 데이터가 변할 때만 콜하고 싶다면, 그 데이터를 넘겨주면 된다.

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "All Blogs !" handleDelete={handleDelete}/>
            <button onClick={()=> setName('luigi')}>Change name</button>
            <p>{name}</p>
       </div>
    );
    }

export default Home;

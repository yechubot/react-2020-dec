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

    //렌더링 될때마다 실행되는 함수 
    //즉 데이터 바뀔때마다 계속 실행됨 (run every render!!! )
    useEffect(()=> {
        console.log('use effect ran');
        console.log(blogs);
    });
    // useEffect -> useState -> rerender -> useEffect ->  continuous loop ...

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "All Blogs !" handleDelete={handleDelete}/>
       </div>
    );
    }

export default Home;

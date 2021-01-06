import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
    {title:'my mew website', body: 'lorem ipsum...', author:'mario', id:1},
    {title:'welcome party', body: 'lorem ipsum...', author:'mario', id:2},
    {title:'my web dev top tips', body: 'lorem ipsum...', author:'ninja', id:3}
    ]);

    const handleDelete = (id)=> {// 여기 아이디랑 
        //setBlog함수를 사용하여..
         const newBlogs = blogs.filter(blog => blog.id !== id) // 여기 아이디가 매치하면 false가 되서 필터되는 원리 
         // filter method new array를 리턴한다. 오리지널은 안바뀜 
            setBlogs(newBlogs);
        }
    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "All Blogs !" handleDelete={handleDelete}/>
            <BlogList blogs = {blogs.filter((blog)=>blog.author ==='mario' ) } title = "Mario's blogs!" handleDelete={handleDelete}/>
        </div>
    );
    }

export default Home;

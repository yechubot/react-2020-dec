import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
    {title:'my mew website', body: 'lorem ipsum...', author:'mario', id:1},
    {title:'welcome party', body: 'lorem ipsum...', author:'mario', id:2},
    {title:'my web dev top tips', body: 'lorem ipsum...', author:'ninja', id:3}
    ]);
   
    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "All Blogs !"/>
            <BlogList blogs = {blogs.filter((blog)=> 
                //filter메소드를 사용하여 mario가 저자인것 만 빼기
                //true 면 그대로 두고, false는 필터하는 원리
                blog.author ==='mario' // true, false, false 가 되어 new array로 나오는 것 
            ) } title = "Mario's blogs!"/>
        </div>
    );
    }

export default Home;

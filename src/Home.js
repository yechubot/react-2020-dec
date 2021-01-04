import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {// parent component
    const [blogs, setBlogs] = useState([
    {title:'my mew website', body: 'lorem ipsum...', author:'mario', id:1},
    {title:'welcome party', body: 'lorem ipsum...', author:'yechu', id:2},
    {title:'my web dev top tips', body: 'lorem ipsum...', author:'ninja', id:3}
    ]);
    //컴포넌트를 만들면 필요할 때 만들어 놓은 걸 사용할 수 있다. --resusable 
    //Props form을 사용하면 된다.
    //만든 컴포넌트를 원하는 곳에 넣어 사용함
    return ( // bloglist -- child component
        //blogs(원하는 이름 주고) = {blogs} --> prop 임 
        <div className="home">
            <BlogList blogs = {blogs} title = "All Blogs !"/>
        </div>
    );
    }

export default Home;

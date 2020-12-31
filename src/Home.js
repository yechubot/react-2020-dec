import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
    {title:'my mew website', body: 'lorem ipsum...', author:'mario', id:1},
    {title:'welcome party', body: 'lorem ipsum...', author:'yechu', id:2},
    {title:'my web dev top tips', body: 'lorem ipsum...', author:'ninja', id:3}
    ]);
    
    return (
        <div className="home">
            {blogs.map((blog)=> (//map으로 할때 해당 아이템은 key property꼭 있어야 한다
            //그리고 키는 유니크해야함 
                <div className="blog-preview" key ={blog.id}>
                    <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
    }

export default Home;

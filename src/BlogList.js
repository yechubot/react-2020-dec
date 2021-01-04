const BlogList = ({blogs, title}) => {//bloglist 컴포넌트 만들기 
    //direct로 이렇게 넣을 수도 있음

    // Home.js에서 줬던 prop을 여기에 pass -> access 할 수 있음
    /*  위에 (props)를 pass 하는 경우 이렇게 하거나 
    const blogs = props.blogs;
    const title = props.title;*/

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key ={blog.id}>
                    <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
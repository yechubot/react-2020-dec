const BlogList = ({blogs, title, handleDelete}) => {
    //버튼을 클릭하여 데이터를 삭제할때 블로그 아이디를 넘겨받아야 하는데
    //데이터가 있는 Home.js에 있는 setBlog 메소드를 이용하여 처리한다.
    //handleDelete라는 함수를 prop으로 넘겨준다.
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key ={blog.id}>
                    <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick={()=> handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {//sfc 
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id)
    const history = useHistory();

    //delete click
    const handleClick= ()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/'+blog.id, {
            method:'DELETE'
        })
        .then(()=> {
            console.log('blog deleted');
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div> {error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.id}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>

            )}
        </div>
    );
}

export default BlogDetails;

import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // grab a data but call it blogs in ths context 
    const {data:blogs, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts')
    
    return ( //에러나면 메세지 뜨게 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs !"/>}
       </div>
     );
    }

export default Home;

import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); //envoke go back and forth history , redirect user

    //submit 함수 
    const handleSubmit = (e) => {
        //submit시 새로고침 방지
        e.preventDefault();
        const blog = {title, body, author}; //블로그 오브젝트
      //  console.log(blog) 콘솔에 확인가능

      setIsPending(true);

      fetch('https://jsonplaceholder.typicode.com/posts',{
          method:'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(blog)
      })
      .then((response)=> response.json())
      //.then((json)=> console.log(json)) 되는것 확인함 
      .then(()=> {// when it's done 
         console.log('new blog added');
          setIsPending(false);
       // history.go(-1);  그전에있던 페이지로 돌아감 한번 뒤로 가는 것 
       history.push('/');
      })
    }
    return (
        <div className="create">
            <h2> Add a New Blog </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input
                    type="text"
                    required 
                    value ={title}
                    onChange={(e)=> setTitle(e.target.value)}//input 값이 있을 때 발생 
                    />
                <label>Blog body: </label>
                <textarea 
                required
                value = {body}
                onChange = {(e)=> setBody(e.target.value)}></textarea>
                <label>Blog author: </label>
                <select
                value = {author}
                onChange = {(e)=> setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
              { !isPending && <button>Add Blog</button>}
              { isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>{/* 위에서 입력한거 확인할 수 있음  */}
                <p>{body}</p>
            </form>
        </div>
    );
}

export default Create;
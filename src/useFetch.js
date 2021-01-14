//custom hook must start with the word 'use' otherwise it won't work!
import {useState, useEffect} from 'react';

const useFetch = (url) => { // 나중에도 쓰기위해 이름을 바꿈 blogs => data
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> { 
        fetch(url)
        .then(res=> {
            if(!res.ok){ 
                throw Error('could not fetch the data for that resource');
            }
           return res.json()
        })
        .then((data)=> { // 이건 로컬 버젼이라 이름 충돌안함 
            setData(data);
            setIsPending(false); 
            setError(null); 
        })
        .catch(err=>{
        setError(err.message);
        setIsPending(false);
        })
    },[url]);

    return {data, isPending, error}
}

export default useFetch;
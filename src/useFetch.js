//custom hook must start with the word 'use' otherwise it won't work!
import {useState, useEffect} from 'react';

const useFetch = (url) => { // 나중에도 쓰기위해 이름을 바꿈 blogs => data
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> { 
        const abortCont = new AbortController();
        // 이를 specific fetch request랑 연결하여 
        //fetch를 멈출 때 사용 
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal}) // 이렇게 연결함 
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
                if(err.name ==='AbortError'){
                    console.log('fetch aborted')
                }else {
                    setError(err.message);
                    setIsPending(false);
                }
           
            // 오류날때도 state가 update되서 이를 home이 state update 하려고 함 
            //그래서 abort controller인지 확인해서 거르기 
        })
        }, 1000);
        //home -> add a new blog -> home -> add a new blog 클릭시
        // useFetch 할수 없다고 나온다. home에있는 걸 가져오려고 하기 때문에... 
        // 이를 clean up? 

        return () =>abortCont.abort(); //연결된 fetch가 pause됨 
    },[url]);

    return {data, isPending, error}
}

export default useFetch;
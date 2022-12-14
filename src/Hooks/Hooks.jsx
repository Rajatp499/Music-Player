import React, { useEffect } from 'react';
import {useState} from 'react';

const Hooks =()=>{
    // const state = useState();
    const [count, setcount] = useState(0);
    const [counts, setcounts] = useState(0);
    document.title = `Chats (${count})`;

    useEffect(()=>{
        console.log("count");
    },[count]);


    return (<>
    <div>
        {count}
        <button onClick={() => setcount(count+1)}>increase</button><br />
        {counts}
        <button onClick={() => setcounts(counts+1)}>increase</button>

    </div>
    </>
    )
}

export default Hooks;
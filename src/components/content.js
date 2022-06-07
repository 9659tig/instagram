import React, { useState} from 'react';
import axios from 'axios';

function Content(params) {
    const [post, SetPost] = useState("");

    const postHandler = (e)=>{
        e.preventDefault();
        SetPost(e.target.value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(post);
    }

    let body = {
        title: "최준호 post작업",
        content: post,
        author: "익명",
    }

    axios.post('http://152.67.210.208:5000/feed',body)
    .then((res)=>console.log(res));

    return(
        <form onSubmit={submitHandler}>
            <input type="text" value={post} onChange={postHandler}></input>
            <button type='submit'>게시</button>
        </form>
    )
}

export default Content;
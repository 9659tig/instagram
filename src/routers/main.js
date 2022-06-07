import React, { useState, useEffect} from 'react';
//import Post from '../components/feed'
import axios from 'axios';

function Main(){
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchPosts = async () => {
            try{
                setError(null);
                setPosts(null);
                setLoading(true);
                const response = await axios.get('http://localhost:5000/feed');
                setPosts(response.data);
            } catch(e){
                setError(e);
            }
            setLoading(false);
        }
        fetchPosts();
    },[])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!!</div>;
    if (!posts) return null;

    return(
        <ul>
            {posts && posts.result.map(post =>(
                <li key={post.feedIdx}>
                    {post.title}
                </li>
            ))}
        </ul>
    )
    // return(
    //     <div>Main</div>
    // )

}

export default Main;
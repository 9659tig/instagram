import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Post() {
  const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchPosts = async () => {
            try{
                setError(null);
                setPosts(null);
                setLoading(true);
                const response = await axios.get('http://152.67.210.208:5000/feed');
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
                <li key={post.feedIdx} class="feed">
                    <div>title : {post.title}</div>
                    <div>content : {post.content}</div>
                    <div>author : {post.author}</div>
                </li>
            ))}
        </ul>
    )
}

export default Post;
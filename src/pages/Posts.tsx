import { useEffect, useState } from 'react';
import PostsLists from '../components/PostsLists';
import './posts.css';

import { PostData } from '../interfaces';

const Posts: React.FC = () => {

    const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
    const [postsQuantity, setPostsQuantity] = useState<number>(5);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsQuantity}`);
            const data: PostData[] = await response.json();
            setAllPosts(data);
        }
        getPosts();
        
        
    },[postsQuantity]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostsQuantity(+e.target.value);
    }

    return (
        <div className="post-container">
            <h1>Main</h1>
            <div style={{ display : 'flex', flexDirection: 'column'}}>
                <label htmlFor="posts">Posts Numbers {postsQuantity}</label>
                <input type="range" min={1} max={20} onChange={onChange}/>
                <PostsLists allPosts={allPosts} />
            </div>
        </div>
    )
}

export default Posts;
import { useEffect, useState } from 'react';
import PostsLists from '../components/PostsLists';

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
        <div className="w-full flex items-center flex-col">
            <h1 className='mt-3'>Main</h1>
            <div className='flex flex-col w-[80%]'>
                <label htmlFor="posts">Posts Numbers {postsQuantity}</label>
                <input type="range" min={1} max={20} defaultValue={5} onChange={onChange}/>
                <PostsLists allPosts={allPosts} />
            </div>
        </div>
    )
}

export default Posts;
import { useEffect, useState } from 'react';
import PostsLists from '../components/PostsLists';

import { PostData } from '../interfaces';

const Posts: React.FC = () => {

    const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
    const [postsQuantity, setPostsQuantity] = useState<number>(5);

    const quantityFromLocalOrState = () => localStorage.getItem('number') || postsQuantity;

    const getPostsQuantity = quantityFromLocalOrState();

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${getPostsQuantity}`);
            const data: PostData[] = await response.json();
            setAllPosts(data);
        }
        getPosts();
        
        
    },[getPostsQuantity]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostsQuantity(+e.target.value);
        localStorage.setItem('number', e.target.value);
    }

    return (
        <div className="w-full flex items-center flex-col">
            <h1 className='mt-3'>Main</h1>
            <div className='flex flex-col w-[80%]'>
                <label htmlFor="posts">Posts Numbers {getPostsQuantity}</label>
                <input type="range" min={1} max={20} defaultValue={getPostsQuantity} onChange={onChange}/>
                <PostsLists allPosts={allPosts} />
            </div>
        </div>
    )
}

export default Posts;
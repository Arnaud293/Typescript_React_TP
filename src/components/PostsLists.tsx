
import { useNavigate } from "react-router-dom";
import { PostData } from "../interfaces";

interface PostsListProps{
    allPosts: PostData[] | null;
}

const PostsLists: React.FC <PostsListProps> = ({allPosts}) => {

  const navigate = useNavigate()

  return (
    <ul className="w-full flex flex-wrap gap-2 mt-5">
        {allPosts?.map((post) => (
            <li key={post.id} className='w-[300px] min-h-[200px] bg-gray-800 rounded-md p-3' onClick={() => navigate(`/${post.id}`)}>
                <h2 className="font-bold text-lg border-b text-white p-1">{post.title}</h2>
                <p className="text-white cursor-pointer transition duration-200 hover:text-purple-800">Read article</p>
            </li>
        ))}
    </ul>
  )
}

export default PostsLists
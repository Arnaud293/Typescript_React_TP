
import { PostData } from "../interfaces";

interface PostsListProps{
    allPosts: PostData[] | null;
}

const PostsLists: React.FC <PostsListProps> = ({allPosts}) => {
  return (
    <ul className="posts">

    </ul>
  )
}

export default PostsLists
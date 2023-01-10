
import { PostData } from "../interfaces";

interface PostDetailsProps{
    onePost: PostData | null;
}

const PostDetails:React.FC<PostDetailsProps> = ({onePost}) => {
  return (
    <div className="w-[600px] min-h-[400px] bg-gray-800 rounded-md p-3">
        <h1 className="font-bold text-lg border-b text-white p-1">Post : {onePost?.id}</h1>
        <h2 className="font-bold text-lg border-b text-white p-1">{onePost?.title}</h2>
        <p className="text-white cursor-pointer">{onePost?.body}</p>
    </div>
  
  )
}

export default PostDetails
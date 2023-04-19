import {useParams} from 'react-router-dom';

const Post = () => {
    const params = useParams()
    console.log(params);
    return (
        <div>Post</div>
    )
}

export default Post;
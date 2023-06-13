import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { privateAxios } from "../api/config";

const Post = () => {
    const [post, setPosts] = useState({});
    const {postId} = useParams();
    useEffect(() => {
        const getData = async() => {
            try {
                const postResponse = await privateAxios.get(`/post/${postId}`);
                setPosts(postResponse.data)
            } catch(error) {

            }
        }
        getData();
    }, [postId])

    return <div>
        <p>Title: {post.title}</p>
        <p>Description: {post.description}</p>
    </div>
}

export default Post;
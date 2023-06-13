import { useEffect, useState } from "react";
import { privateAxios } from "../api/config";
import { NavLink } from "react-router-dom";

const Posts = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        const getData = async() => {
            try {
                const postsResponse = await privateAxios.get('/post');
                setList(postsResponse.data)
            } catch(error) {

            }
        }
        getData();
    }, [])

    return <ul>
        {list.map((post) => (
            <li key={post._id}>
                <NavLink to={`/post/${post._id}`}>{post.title}</NavLink>
            </li>
        ))}
    </ul>
}

export default Posts;
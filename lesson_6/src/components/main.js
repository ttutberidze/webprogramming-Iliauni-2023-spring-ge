import { Route, Routes } from "react-router-dom";
import Posts from "./posts";
import Home from "./home";
import About from "./about";
import Post from "./post";

const Main = () => {
    return (
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId/:postName" element={<Post />} />
            <Route path="/*" element={<div>Error</div>} />
          </Routes>
          
        </div>
    )
}
export default Main;
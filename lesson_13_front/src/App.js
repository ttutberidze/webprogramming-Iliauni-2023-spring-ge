import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './components/login';
import Posts from './components/posts';
import Post from './components/post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/post/:postId' element={<Post />} />
        <Route path='/' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;

import { useTheme } from "../context/themeContext";
import {NavLink} from 'react-router-dom';
const Sidebar = () => {
  const {theme, toggleTheme} = useTheme()
  return (
      <div className='sidebar' style={theme}>
        Sidebar
        <ul>
          <li><NavLink to="/" style={({isActive}) => {
            return {
              backgroundColor: isActive ? 'lightgreen' : undefined
            }
          }}>Home</NavLink></li>
          <li><NavLink to="/about" style={({isActive}) => {
            return {
              backgroundColor: isActive ? 'lightgreen' : undefined
            }
          }}>About</NavLink></li>
          <li><NavLink to="/posts" style={({isActive}) => {
            return {
              backgroundColor: isActive ? 'lightgreen' : undefined
            }
          }}>Posts</NavLink></li>
        </ul>
        <div>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </div>
  )
}

export default Sidebar;
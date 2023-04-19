import {useTheme} from '../context/themeContext';
const Header = () => {

  const {theme} = useTheme()

  return (
    <header style={theme}>
      Header
    </header>
  )
}

export default Header;
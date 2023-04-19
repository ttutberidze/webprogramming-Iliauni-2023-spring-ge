import { useTheme } from "../context/themeContext"

const Posts = () => {
    const {theme} = useTheme()
    return (
        <div className="posts" style={theme}>
            Posts
        </div>
    )
}

export default Posts
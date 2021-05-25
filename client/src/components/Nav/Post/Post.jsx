import axios from "axios"
import { useState, useEffect } from "react"
// import { getPosts } from "../../../services/posts"

function Post() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get(
        "https://team-blog-app.herokuapp.com/api/posts"
      )
      setPosts(resp.data)
      console.log(resp.data)
    }

    fetchPosts()
  }, [])

  return (
    <div className="posts-cards">
      {posts.map((post) => (
        <div className="hi">
          <img src={post.imgURL} alt="" />
          <p>{post.author}</p>
        </div>
      ))}
    </div>
  )
}

export default Post

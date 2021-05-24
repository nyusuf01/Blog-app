import { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import { getPost, deletePost } from "../../services/posts"
import { Link, useParams } from "react-router-dom"

const PostDetail = () => {
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className="post-detail">
        <div className="title">{post.title}</div>
        <div className="author">{post.author}</div>
        <div className="content">{post.content}</div>
        <img src={post.imgURL} alt="blog picture" />
        <div className="detail-buttons">
          <button>
            <Link to={`posts/${post._id}/edit`}>Edit</Link>
          </button>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      </div>
    </Layout>
  )
}

export default PostDetail

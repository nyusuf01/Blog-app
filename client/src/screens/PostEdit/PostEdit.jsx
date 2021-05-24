import { useState, useEffect } from "react";
import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getPost, updatePost } from "../../services/posts";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    content: "",
    author: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { title, value } = event.target;

    setPost({
      ...post,
      [title]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updatePost(post);
    setUpdated({ updated });
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />;
  }

  return (
    <Layout>
      <div className="post-edit">
        <div className="image-container">
          <img className="edit-post-image" src={post.imgURL} alt={post.title} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={post.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-title"
            placeholder="Title"
            value={post.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className="textarea-content"
            rows={10}
            cols={78}
            placeholder="Content"
            value={post.content}
            name="content"
            required
            onChange={handleChange}
          />
          <input
            className="input-author"
            placeholder="Author"
            value={post.author}
            name="author"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;

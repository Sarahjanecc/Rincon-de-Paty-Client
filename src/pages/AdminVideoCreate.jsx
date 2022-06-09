import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addNewVideoService } from "../services/video.services";
import Layout from "../components/Layout";
import { AuthContext } from "../context/auth.context.js";
// import Form from "react-bootstrap/Form";

function AdminVideoCreate() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleImgChange = (e) => setImg(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const video = {
        title,
        img,
        url,
      };

      await addNewVideoService(video);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <Layout>
      <h3>Create Video </h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />
        <label htmlFor="img">Image</label>
        <input type="img" name="img" onChange={handleImgChange} value={img} />

        <label htmlFor="url">Video</label>
        <input type="url" name="url" onChange={handleUrlChange} value={url} />

        <button type="submit">Create</button>
      </form>
    </Layout>
  );
}

export default AdminVideoCreate;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editBooksService,
  getAllBooksService,
} from "../services/book.services";
import Layout from "../components/Layout";

function AdminEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState[""];

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImgChange = (e) => setImg(e.target.checked);
  const handleUrlChange = (e) => setUrl(e.target.checked);
  const handlePriceChange = (e) => setPrice(e.target.checked);
  const handleTypeChange = (e) => setType(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const theBooks = {
        title,
        description,
        img,
        url,
        price,
        type,
      };

      await editBooksService(id, theBooks);
      navigate(`/books/${id}`);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    try {
      const response = await getAllBooksService(id);
      const { title, description, img, url, price, type } = response.data;

      setTitle(title);
      setDescription(description);
      setImg(img);
      setUrl(url);
      setPrice(price);
      setType(type);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <Layout>
      <h3>Book Edit</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />

        <label htmlFor="img">Image</label>
        <input type="src" name="img" onChange={handleImgChange} checked={img} />

        <label htmlFor="url">Video</label>
        <input type="url" name="url" onChange={handleUrlChange} checked={url} />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          onChange={handlePriceChange}
          checked={price}
        />

        <label htmlFor="type">Type</label>
        <input
          type="text"
          name="type"
          onChange={handleTypeChange}
          checked={type}
        />

        <button type="submit">Edit</button>
        <button type="submit">Delete</button>
      </form>
    </Layout>
  );
}

export default AdminEdit;

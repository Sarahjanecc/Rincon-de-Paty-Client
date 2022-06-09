import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addNewBooksService } from "../services/book.services";
import Layout from "../components/Layout";
import { AuthContext } from "../context/auth.context.js";
// import Form from "react-bootstrap/Form";

function AdminCreate() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [purchaseLink, setPurchaseLink] = useState("");
  const [type, setType] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImgChange = (e) => setImg(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handlePurchaseLinkChange = (e) => setPurchaseLink(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const book = {
        title,
        description,
        img,
        url,
        price,
        purchaseLink,
        type,
        adminId: user._id,
      };

      await addNewBooksService(book);
      if (type === "audiolibro") {
        navigate(`/audiobooks`);
      } else {
        navigate(`/books`);
      }
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <Layout>
      <h3>Create Book </h3>

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
        <input type="img" name="img" onChange={handleImgChange} value={img} />

        <label htmlFor="url">Video</label>
        <input type="url" name="url" onChange={handleUrlChange} value={url} />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          onChange={handlePriceChange}
          value={price}
        />
        <label htmlFor="purchaseLink">PurchaseLink</label>
        <input
          type="url"
          name="purchaseLink"
          onChange={handlePurchaseLinkChange}
          value={purchaseLink}
        />

        <label htmlFor="type">Type</label>
        <input
          type="text"
          name="type"
          onChange={handleTypeChange}
          value={type}
        />
        <button type="submit">Create</button>
      </form>
    </Layout>
  );
}

export default AdminCreate;

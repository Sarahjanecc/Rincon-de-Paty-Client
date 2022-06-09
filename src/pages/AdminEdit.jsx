import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editBooksService,
  getBookById,
  deleteBooksService,
} from "../services/book.services";
import Layout from "../components/Layout";
import { AuthContext } from "../context/auth.context.js";

function AdminEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
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

  const handleDelete = () => {
    deleteBooksService(id);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const books = {
        title,
        img,
        description,
        url,
        price,
        purchaseLink,
        type,
        // adminId: user._id, // ! no se envia desde el front, esto debe venir del backend (payload)
      };
      console.log(books);

      await editBooksService(id, books);
      if (type === "audiolibro") {
        navigate(`/audiobooks`);
      } else {
        navigate(`/books`);
      }
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    getBook(id);
  }, [id]);

  const getBook = async (bookId) => {
    console.log(id);
    try {
      const response = await getBookById(bookId);
      console.log(response);
      const { title, img, description, url, price, type, purchaseLink } =
        response.data;

      setTitle(title);
      setImg(img);
      setDescription(description);
      setUrl(url);
      setPrice(price);
      setPurchaseLink(purchaseLink);
      setType(type);
    } catch (error) {}
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
        <button type="submit">Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </Layout>
  );
}

export default AdminEdit;

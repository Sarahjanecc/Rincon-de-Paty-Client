import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editBooksService,
  getBookById,
  deleteBooksService,
} from "../services/book.services";
import Layout from "../components/Layout";
import { AuthContext } from "../context/auth.context.js";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

      <div style={{ justifyContent: "center", display: "flex" }}>
        <Form onSubmit={handleSubmit} style={{ width: "400px" }}>
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={handleTitleChange}
            value={title}
          />
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            onChange={handleDescriptionChange}
            value={description}
          />
          <Form.Label htmlFor="img">Image</Form.Label>
          <Form.Control
            type="img"
            name="img"
            onChange={handleImgChange}
            value={img}
          />
          <Form.Label htmlFor="url">Video</Form.Label>
          <Form.Control
            type="url"
            name="url"
            onChange={handleUrlChange}
            value={url}
          />
          <Form.Label htmlFor="price">Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            onChange={handlePriceChange}
            value={price}
          />
          <Form.Label htmlFor="purchaseLink">PurchaseLink</Form.Label>
          <Form.Control
            type="url"
            name="purchaseLink"
            onChange={handlePurchaseLinkChange}
            value={purchaseLink}
          />
          <Form.Label htmlFor="type">Type</Form.Label>
          <Form.Control
            type="text"
            name="type"
            onChange={handleTypeChange}
            value={type}
          />
          <div className="d-grid mt-2">
            <Button variant="outline-success" type="submit">
              Edit
            </Button>
          </div>
          <div className="d-grid mt-2">
            <Button variant="outline-danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Form>
      </div>
    </Layout>
  );
}

export default AdminEdit;

import React from "react";
import Layout from "../components/Layout";

const AdminMessages = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImgChange = (e) => setImg(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);

  const handleDelete = () => {
    deleteBooksService(id);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const books = {
        title,
        description,
        img,
        url,
        price,
        type,
        adminId: user._id,
      };

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
      const { title, description, img, url, price, type } = response.data;

      setTitle(title);
      setDescription(description);
      setImg(img);
      setUrl(url);
      setPrice(price);
      setType(type);
    } catch (error) {}
  };

  return <Layout>AdminMessages</Layout>;
};

export default AdminMessages;

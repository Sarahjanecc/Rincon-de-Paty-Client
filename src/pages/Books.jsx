import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { getAllBooksService } from "../services/book.services";

function Books() {
  const [allBooks, setAllBooks] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    try {
      const response = await getAllBooksService();
      setAllBooks(response.data);
      console.log(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  if (allBooks === null) {
    return <h3>... Loading</h3>;
  }

  return (
    <Layout>
      {allBooks !== null &&
        allBooks.map((eachBook) => {
          return (
            <div key={eachBook._id}>
              <Link to={`/books/${eachBook._id}`}>{eachBook.title}</Link>
            </div>
          );
        })}
    </Layout>
  );
}

export default Books;

import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { getAllAudioBooksService } from "../services/book.services";

function AudioBooks() {
  const [allBooks, setAllBooks] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    try {
      const response = await getAllAudioBooksService();
      setAllBooks(response.data);
      console.log(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
      } else {
        // navigate("/error");
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
              <h2>{eachBook.title}</h2>
              <img src={eachBook.img} />
              <p>{eachBook.description}</p>
              <a href={eachBook.url} target="_blank">
                Check Audio
              </a>
            </div>
          );
        })}
    </Layout>
  );
}

export default AudioBooks;

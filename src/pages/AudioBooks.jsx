import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { getAllAudioBooksService } from "../services/book.services";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <Row>
        {allBooks !== null &&
          allBooks.map((eachBook) => {
            return (
              <Col sm={6} className="d-flex justify-content-center p-4">
                <Card key={eachBook._id} style={{ width: "300px" }}>
                  <Card.Img src={eachBook.img} />
                  <Card.Body>
                    <Card.Title>{eachBook.title}</Card.Title>
                    <Card.Body>{eachBook.description}</Card.Body>
                    <Nav.Link href={eachBook.url} target="_blank">
                      Check Audio
                    </Nav.Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Layout>
  );
}

export default AudioBooks;

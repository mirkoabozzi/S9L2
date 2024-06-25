import { Component } from "react";
import fantasyBooks from "../data/fantasy.json";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {fantasyBooks.map((book) => {
            return (
              <Col sm="12" md="6" lg="4">
                <Card className="my-3">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.price} €</Card.Text>
                    <Button variant="primary">Compra ora</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;

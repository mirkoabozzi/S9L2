import { Component } from "react";
import fantasyBooks from "../data/fantasy.json";
import historyBooks from "../data/history.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import scifiBookss from "../data/scifi.json";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    categorySelected: fantasyBooks,
  };
  render() {
    return (
      <Container>
        <h3>Premi il bottone sottostante per scegliere la tua categoria preferita</h3>
        <Button className="mx-2 px-4" onClick={() => this.setState({ categorySelected: fantasyBooks })}>
          Fantasy
        </Button>
        <Button className="mx-2 px-4" onClick={() => this.setState({ categorySelected: historyBooks })}>
          History
        </Button>
        <Button className="mx-2 px-4" onClick={() => this.setState({ categorySelected: horrorBooks })}>
          Horror
        </Button>
        <Button className="mx-2 px-4" onClick={() => this.setState({ categorySelected: romanceBooks })}>
          Romance
        </Button>
        <Button className="mx-2 px-4" onClick={() => this.setState({ categorySelected: scifiBookss })}>
          Scifi
        </Button>
        <Row>
          {this.state.categorySelected.map((book) => {
            return (
              <Col kay={book.asin} sm="12" md="6" lg="4">
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

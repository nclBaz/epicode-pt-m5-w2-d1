import { Component } from "react"
import { Container, Row, Col, Carousel, ListGroup } from "react-bootstrap"
import menuItems from "../data/menu.json"
import ReservationForm from "./ReservationForm"

class Main extends Component {
  constructor() {
    super()

    this.state = { selectedItem: null }
  }

  render() {
    const onItemClicked = menuItem => {
      // State should be immutable, so we don't change state properties like this!
      // this.state.selectedItem = menuItem;

      this.setState({ selectedItem: menuItem })
    }

    const createCarouselItem = menuItem => (
      <Carousel.Item>
        <img
          onClick={() => onItemClicked(menuItem)}
          className="d-block w-100"
          src={menuItem.image}
          alt=""
        />
        <Carousel.Caption>
          <h3>{menuItem.name}</h3>
          <p>{menuItem.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )

    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Carousel>{menuItems.map(createCarouselItem)}</Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            {this.state.selectedItem && (
              <ListGroup>
                {this.state.selectedItem.comments.map(comment => (
                  <ListGroup.Item>{comment.comment}</ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <ReservationForm />
        </Row>
      </Container>
    )
  }
}

export default Main

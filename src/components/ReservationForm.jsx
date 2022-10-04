import { Component } from "react"
import { Form, Button } from "react-bootstrap"

class ReservationForm extends Component {
  render() {
    return (
      <div>
        <h2>Book your table!</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>What's your name?</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>What's your phone number?</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>How many people?</Form.Label>
            <Form.Control as="select" placeholder="Enter username">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>When are you coming?</Form.Label>
            <Form.Control type="datetime-local" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Do you smoke?" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Any special requests?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write here your special requests!"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default ReservationForm

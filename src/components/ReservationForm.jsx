import { Component } from "react"
import { Form, Button } from "react-bootstrap"

class ReservationForm extends Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: 1,
      dateTime: "",
      smoking: false,
      specialRequests: "",
    },
  }

  handleChange = (propertyName, valueToSet) => {
    // USAGE: this.handleChange("phone", 1234) or this.handleChange("numberOfPeople", 2)

    // const myObject = { name: "whatever"}

    // 1. myObject.name
    // 2. myObject["name"]

    // In order to use a STRING coming as a parameter (propertyName) as object property name, you need to EVALUATE that by putting it into square brackets

    this.setState({
      reservation: {
        ...this.state.reservation,
        [propertyName]: valueToSet,
      },
    })
  }

  render() {
    return (
      <div>
        <h2>Book your table!</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>What's your name?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={this.state.reservation.name}
              onChange={event => {
                console.log("CURRENT INPUT VALUE: ", event.target.value)

                this.handleChange("name", event.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>What's your phone number?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={this.state.reservation.phone}
              onChange={event => {
                console.log("CURRENT INPUT VALUE: ", event.target.value)
                this.handleChange("phone", event.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>How many people?</Form.Label>
            <Form.Control
              as="select"
              value={this.state.reservation.numberOfPeople}
              onChange={event => {
                console.log("CURRENT INPUT VALUE: ", event.target.value)
                this.handleChange("numberOfPeople", event.target.value)
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>When are you coming?</Form.Label>
            <Form.Control
              type="datetime-local"
              value={this.state.reservation.dateTime}
              onChange={event => {
                console.log("CURRENT INPUT VALUE: ", event.target.value)
                this.handleChange("dateTime", event.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Do you smoke?"
              checked={this.state.reservation.smoking}
              onChange={event => {
                console.log("CURRENT INPUT VALUE: ", event.target.checked)
                this.handleChange("smoking", event.target.checked)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Any special requests?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write here your special requests!"
              value={this.state.reservation.specialRequests}
              onChange={event => {
                console.log("CURRENT INPUT VALUE: ", event.target.value)
                this.handleChange("specialRequests", event.target.value)
              }}
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

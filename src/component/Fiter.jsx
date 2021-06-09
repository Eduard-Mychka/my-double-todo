import { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export default class Fiter extends Component {
  render() {
    return (
      <ButtonGroup className="btn-group" aria-label="Basic example">
        <Button variant="secondary active">All</Button>
        <Button variant="secondary">ToDos</Button>
        <Button variant="secondary">Done</Button>
      </ButtonGroup>
    );
  }
}

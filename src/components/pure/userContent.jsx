import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UserContent() {
  return (
    <div>
           <Card className="text-center m-4">
      <Card.Header>User</Card.Header>
      <Card.Body>
        <Card.Title>User content</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
  )
}

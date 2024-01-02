import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFecth';

function Home() {
  const data= useFetch("https://dummyjson.com/products")
  return (
    <>
      <Row className='m-5'>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div className='d-flex align-items-center justify-content-between'>
                <Button variant="outline-danger"><i class="fa-solid fa-heart"></i></Button>
                <Button variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Home
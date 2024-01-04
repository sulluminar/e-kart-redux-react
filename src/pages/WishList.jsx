import React from 'react'
import { Row,Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer);
  console.log("====wishlist Array==");
  console.log(wishlistArray)
  return (
    <>
    <Row className='m-5 p-5' style={{marginTop:"400px"}}>
      <Link to={'/'} style={{textDecoration:"none", color:"blue",}} className='m-3'><i class="fa-solid fa-arrow-left m-3"></i>Back To Home</Link>
    {
          wishlistArray?.length>0?
          wishlistArray?.map((item)=>(
            <Col className='mb-5'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.thumbnail}  style={{height:'200px'}}/>
              <Card.Body>
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text>
                  <p>{item.description.slice(0,50)}...</p>
                  <p>Price: {item.price}</p>
                </Card.Text>
                <div className='d-flex align-items-center justify-content-between'>
                  <Button variant="outline-danger" ><i class="fa-solid fa-trash"></i></Button>
                  <Button variant="outline-success" ><i class="fa-solid fa-cart-plus"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          ))
        :
        <p>No Item to display</p>
        }
    </Row>
   
    </>
  )
}

export default WishList
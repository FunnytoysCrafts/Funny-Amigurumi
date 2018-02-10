import React, { Component } from 'react';
import {
  Button,
  Grid,
  Row,
  Col,
  Thumbnail
} from 'react-bootstrap';


class Landing extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row id='list-container'>
            <Col xs={6} md={4}>
              <Thumbnail src='img/cat_mint.jpg' alt='Mint cat'>
                <h3>MINT CAT</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Add to Cart</Button>&nbsp;
                  <Button bsStyle="default">Add to List</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src='img/doll_violet.jpg' alt='Mint cat'>
                <h3>VIOLET DOLL</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Add to Cart</Button>&nbsp;
                  <Button bsStyle="default">Add to List</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src='img/fox.jpg' alt='Mint cat'>
                <h3>SLEEPY FOX</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Add to Cart</Button>&nbsp;
                  <Button bsStyle="default">Add to List</Button>
                </p>
              </Thumbnail>
            </Col>


          </Row>
        </Grid>;

        {/*
        <Carousel>
          <Carousel.Item>
            <img width={1840} height={300} alt='koala' src='img/slide_koala1.png' />
            <Carousel.Caption>
              <h3>Koala</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1840} height={300} alt='lamb' src='img/slide_lamb.png' />
            <Carousel.Caption>
              <h3>Lamb</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1840} height={300} alt='doll' src='img/slide_doll1.png' />
            <Carousel.Caption>
              <h3>Doll</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1840} height={300} alt='cat' src='img/slide_cat.png' />
            <Carousel.Caption>
              <h3>Cat</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

*/}


      </div>
    );
  }
}

export default Landing;

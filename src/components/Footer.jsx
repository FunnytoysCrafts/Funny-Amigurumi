import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class Footer extends Component {
  render () {
    return (
      <div className='container'>
        <Grid>
          <Row className='show-grid'>
            <Col xs={6} md={4}>
              <a href='https://www.instagram.com/funny_toys_amiguru/'>
                <h4>Follow on Instagram</h4>
              </a>
            </Col>
            <Col xs={6} md={4}>
              <a href='https://www.facebook.com/FunnyAmiguru/'>
                <h4>Like on Facebook</h4>
              </a>
            </Col>
            <Col xs={6} md={4}>
              <h6>Copyright © 2018</h6>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;

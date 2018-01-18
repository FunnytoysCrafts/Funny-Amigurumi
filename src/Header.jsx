//console.log('This is a rainbows.js');

import React from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  Navbar,
} from 'react-bootstrap';

class Header extends React.Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Weather App
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type='text' placeholder='Search' />
              </FormGroup>{' '}
              <Button type='submit'>Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

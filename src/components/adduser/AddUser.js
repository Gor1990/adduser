import React from 'react';
import {Link} from 'react-router-dom';
import {Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

class AddUser extends React.Component {
   

    render() {

const {handleOnChange,handleOnSubmit}= this.props

    return (
   <div>
       <Grid>
           <Row>
               <Col md={4}>
                    <Form >
                      <FormGroup >
                          <ControlLabel>First Name</ControlLabel>{' '}
                          <FormControl type="text" placeholder="First Name" name='fname' onChange={handleOnChange}/>
                      </FormGroup>{' '}
                      <FormGroup>
                          <ControlLabel>Last Name</ControlLabel>{' '}
                          <FormControl type="text" placeholder="Last Name"  name='lname' onChange={handleOnChange} />
                      </FormGroup>{' '}
                      <FormGroup >
                          <ControlLabel>Email</ControlLabel>{' '}
                          <FormControl type="email" placeholder="jane.doe@example.com" name='email' onChange={handleOnChange} />
                      </FormGroup>{' '}
                      <FormGroup >
                          <ControlLabel>Password</ControlLabel>{' '}
                          <FormControl type="password" placeholder="Password"  name='password' onChange={handleOnChange} />
                      </FormGroup>{' '}
                      <FormGroup >
                          <ControlLabel>Confirm Password</ControlLabel>{' '}
                          <FormControl type="password" placeholder="Confirm Password" name='cpassword' onChange={handleOnChange}/>
                      </FormGroup>{' '}
                    
                       <Link  to='/'  ><Button 
                          bsStyle="success"
                          onClick={handleOnSubmit}
                          >Add</Button> </Link>
                          <Link to='/'> <Button bsStyle="primary">Cancel</Button> </Link>
                        
                </Form>
          </Col>
    </Row>  
</Grid>

   </div>
      );
    }
  }

  AddUser.propTypes ={
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired

  } 
  
  export default AddUser;
import React  from 'react';
import {Grid, Row, Col,Table,Glyphicon,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './User.css';

class User extends React.Component {

    render(){
        const userProps=this.props.users.users;
              return(
            <div>
                 <Grid> 
                  <Row>
                    <Col md={10}>    
                        <Table striped bordered condensed hover>
                            <thead>
                              <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {userProps.map((userProp,index)=>{
                              return(   
                              <tr  key={userProp.id} >
                                <td>{index+1}</td>
                                <td>{userProp.fname}</td>
                                <td>{userProp.lname}</td>
                                <td>{userProp.email}</td>
                                <td> <Glyphicon glyph="remove" className='user-delete' onClick={()=>this.props.deleteUser(userProp.id)}
                                
                                /></td>
                              </tr>
                              )
                              })}
                              
                            </tbody>
                        </Table>
                 <Link to='/addUser'> <Button bsStyle="success">Add user</Button> </Link>
                  </Col>
                </Row>
            </Grid>
         </div>
           )
       }
       
       
  
}

User.propTypes={
  userProps:PropTypes.array
}

export default User;
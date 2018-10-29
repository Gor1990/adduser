import React  from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import User from './components/user/User';
import AddUser from './components/adduser/AddUser';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      users: [
        {
          id:1,
          fname:'Gor',
          lname:'Manaseryan',
          email:'@mail.ru',
          password:'www' 
        },
        {
          id:2,
          fname:'Gor',
          lname:'Manaseryan',
          email:'@mail.ru',
          password:'www' 
        }
      ],
      newUser:{
          id:null,
          fname:null,
          lname:null,
          email:null,
          password:null,
          cpassword:null
      },
       }
  this.handleOnChange=this.handleOnChange.bind(this);
  this.handleOnSubmit=this.handleOnSubmit.bind(this);
  this.handleDeleteUser=this.handleDeleteUser.bind(this);
  this.validateField=this.validateField.bind(this);
 
  }

  // validate
    validateField(){
      const {fname,lname,email,password,cpassword} = this.state.newUser;
        if(fname==null){
          alert('Please enter your first name');
          return false;
            } else if(lname==null){
          alert('Please enter your last name');
          return false;
        } else if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
         alert('email is not valid');
         return false;
        }else if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ){
          alert('Please enter minimum eight characters, at least one letter and one number');
          return false;
           } else if(password !== cpassword){
            alert('Password doesnt match with confirm password');
           } else {
            this.setState({
              users: [...this.state.users,this.state.newUser ],
          })
            this.setState(
    prevState => ({
      newUser: {
          ...prevState.newUser,
          id:null,
          fname:null,
          lname:null,
          email:null,
          password:null,
          cpassword:null

      }
    }))

           }
          }
    

  // onsubmit
  handleOnSubmit() {
  this.validateField();
  }

  // delete user
  handleDeleteUser(id){
   const users=this.state.users.filter((item)=>{
     return id !== item.id
   })
this.setState({
  users
})
  }

  //  user change
 handleOnChange(event){
    const inputName=event.target.name;
    const inputValue=event.target.value;
    const id=this.state.users.length+1;
    this.setState(
      prevState => ({
        newUser: {
            ...prevState.newUser,
            id
        }
      }))
    if(inputName==='fname'){
        const fname=inputValue;
      this.setState(
        prevState => ({
          newUser: {
              ...prevState.newUser,
              fname
          }
        }))
    }  else if(inputName==='lname'){
        const lname=inputValue;
        this.setState(
          prevState => ({
            newUser: {
                ...prevState.newUser,
                lname
            }
          }))
        
      } else if(inputName==='email'){
        const email=inputValue;

        this.setState(
          prevState => ({
            newUser: {
                ...prevState.newUser,
                email
            }
          }))
       
    } else if(inputName==='password'){
        const password=inputValue;
        this.setState(
          prevState => ({
            newUser: {
                ...prevState.newUser,
                password
            }
          }))} else if(inputName==='cpassword'){
            const cpassword=inputValue;
            this.setState(
              prevState => ({
                newUser: {
                    ...prevState.newUser,
                    cpassword
                }
              }))
       
    }
 
}

  render() {

        return (

      <BrowserRouter>
          <Switch>
          <Route path='/' render={() => <User   users={this.state} deleteUser={this.handleDeleteUser}/>} exact/>
          <Route path='/addUser' render={() => <AddUser 
            handleOnChange={this.handleOnChange} 
            handleOnSubmit={this.handleOnSubmit}
                      />}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

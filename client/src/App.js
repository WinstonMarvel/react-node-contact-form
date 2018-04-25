import React, { Component } from 'react';
import './App.css';
import Button from './Button';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      submission : {
        name: "Winston",
        gender: true,
        message: "test"
        }
    }
  }
  handleClick(){
    fetch("/api/")
    .then((res) => {return res.json()})
    .then(data => console.log(data));
  }
  render() {
    return (
        <div className="App">
            <form>
                <h2>Sign up</h2>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text"/>
                </div>
                 <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email"/>
                </div>
                 <div className="input-group select-group">
                    <label htmlFor="gender">Gender</label>
                    <input name="gender" type="radio"  value="male"/> Male 
                    <input name="gender" type="radio"  value="female"/> Female <br/>
                </div>
                 <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="text"/>
                </div>
                <Button name="Submit">Submit</Button>
            </form>
        </div>
    );
  }
}

export default App;

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
    const request = new Request("/api/",{
        method: "POST",
        headers: new Headers({
            'Content-type' : 'application/json'
        }),
        body: JSON.stringify({name: "ilybk", gender: true, phone: 3242432, email : "sj@sinds.com", message: "sdfsd"})
    });
    fetch(request)
    .then((res) => res.json())
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
                    <input name="gender" type="radio"  value="true"/> Male 
                    <input name="gender" type="radio"  value="false"/> Female <br/>
                </div>
                 <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="text"/>
                </div>
                <Button onClick={this.handleClick}>Submit</Button>
            </form>
        </div>
    );
  }
}

export default App;

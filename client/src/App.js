import React, { Component } from 'react';
import './App.css';
import Button from './Button';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      submission : {
          name: "",
          email: "",
          gender: "",
        }
    }
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(e){
    var element = e.target;
    console.log(this.props);
    // var gender = this.State.submission.gender;
    if(element.name === "gender"){
      console.log("works");
        this.setState( prevState => ({
         submission:{
          ...prevState.submission,
          gender: element.value
        }
        })); 
    }
    else{
      this.setState( prevState => ({
        submission:{
          ...prevState.submission,
          [element.id] : element.value,
        }
      }));
    }
  }

  handleClick(){
    const request = new Request("/api/",{
        method: "POST",
        headers: new Headers({
            'Content-type' : 'application/json'
        }),
        body: JSON.stringify(this.state.submission)
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
                    <input id="name" type="text" onChange={this.onChange} value={this.state.submission.name}/>
                </div>
                 <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={this.onChange} value={this.state.submission.email} />
                </div>
                 <div className="input-group select-group">
                    <label htmlFor="gender">Gender</label>
                    <input name="gender" type="radio"  value="Male" onChange={this.onChange} /> Male 
                    <input name="gender" type="radio"  value="Female" onChange={this.onChange} /> Female <br/>
                </div>
                 <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" onChange={this.onChange} />
                </div>
                <Button onClick={this.handleClick}>Submit</Button>
            </form>
        </div>
    );
  }
}

export default App;

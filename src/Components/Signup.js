import React, { Component } from 'react'
export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fname:'',
            lname:'',
            email:'',
            pass:''
        }
    }
    
    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        value={this.state.fname}
                        onChange={(e)=>{this.setState({fname:e.target.value})}}
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                        value={this.state.lname}
                        onChange={(e) => { this.setState({ lname: e.target.value }) }}/>
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.pass}
                        onChange={(e) => { this.setState({ pass: e.target.value }) }}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
          </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/log-in">Log in?</a>
                </p>
            </form>
        )
    }
}
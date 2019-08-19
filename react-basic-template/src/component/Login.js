import React from 'react';
import UserService from '../service/UserService.ts';

/**
 * Component lifecycle:
 *
 * constructor() -- first element being called, get props and setState ..
 * willMount() -- second func called after constructor(), this is before element is fully rendered...
 * render()  --- renders visual changes, JSX (HTML with components), the cool code that looks like html
 * didMount() -- final element called, once element is finally served, will do anything in background,..
 */
class Login extends React.Component {

    constructor(props){
        super(props);
    }

    // UserService is a typescript class.
    // loginForm is json obj for storing values in this component
    userService = new UserService();
    loginForm = { username:'', password:'' };

    componentWillMount(){
        console.log("Component will mount is deprecated for now, but this is executed before render() ")
    }

    componentDidMount(){
        console.log("Component is mounted", this);
    }

    componentDidCatch(error, info){
        console.log("e", error);
        console.log("i", info);
    }

    submitHandler=(event)=>{
        event.preventDefault();
        console.log("event", this.loginForm);
        console.log("axios call");
        this.userService.getUser().then((res)=>{
            console.log("I got this: ", res.data);
        })
    }

    render(){
        return(
            <div className="jumbotron">
                <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                        <form onSubmit={(e)=>this.submitHandler(e)} >
                            <div className="form-group">
                                <label htmlFor="username1">User</label>
                                <input className="form-control" type="text" id="username1"
                                    name="username" onChange={(e)=>{this.loginForm.username = e.target.value}}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password1">Password</label>
                                <input className="form-control" type="password" id="password1"
                                    name="password" onChange={(e)=>{this.loginForm.password = e.target.value}}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="submit" id="submit1"
                                    name="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

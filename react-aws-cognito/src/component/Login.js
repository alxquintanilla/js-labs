import React from 'react';
import UserService from '../service/UserService.ts';
import cognitoCall from '../service/cognitoCall.js';

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
        console.log("calling aws login endpoints")
        cognitoCall().login();
    }

    render(){
        return(
            <div className="jumbotron">
                <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                        <form onSubmit={(e)=>e.preventDefault()} >
                            <h3>Click to Login with AWS</h3>
                            <br></br>
                            <div className="form-group">
                                <input className="form-control" type="button" 
                                    id="submit1" onClick={this.submitHandler}
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

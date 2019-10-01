import React, { Fragment } from 'react';
import LambdaCalls from '../service/LambdaCalls';

class Welcome extends React.Component {
    
    state = {
        token : null
    }

    constructor(props){
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(){
        let lambda = new LambdaCalls(this.state.token);
        console.info("Click!");
        lambda.getOperation();
    }

    /**
     * Also possible to return [] of elements
     */
    render(){
        return (
            <Fragment>
                <h1>
                    Welcome!
                </h1>

                <br></br>            
                <input type="button" 
                    id="submit1" onClick={this.submitHandler}
                    name="submit" value="Execute Lambda!"/>
            </Fragment>                    
        );
    }

    componentDidMount(){
        let token = this.props.location.hash;
        token = token.split("access_token=")[1];
        token = token.split("&")[0];
        console.log("hash", token);
        if(this.state.token == null){
            this.setState({
                token: token
            });
        }
    }


}

export default Welcome;
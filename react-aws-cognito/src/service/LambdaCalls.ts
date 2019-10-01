import axios from 'axios';

class LambdaCalls {
    
    endpoint: string;
    token: string;

    constructor(token: string){
        this.endpoint = "https://u36i41qaf8.execute-api.us-east-2.amazonaws.com/";
        this.token = token;
     }

    async getOperation(){
         return await axios.get(this.endpoint.concat("/dev/hello"), {
             headers:{
                "Access-Control-Allow-Origin": "*",
                "Authorization":"Bearer ".concat(this.token),
             }
         });
    }

}

export default LambdaCalls;

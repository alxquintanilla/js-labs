import axios from 'axios';

class UserService {

    constructor(){

    }

    async getUser(){
         return await axios.get("http://localhost:3000/user.json");
    }

    async getCognitoIdentity(){

    }
}

export default UserService;

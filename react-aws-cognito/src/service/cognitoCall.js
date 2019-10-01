
export default function cognitoCall(){
    return {
        login: function(){
            const AmazonCognitoIdentity = require("amazon-cognito-auth-js");
            let CognitoAuth = AmazonCognitoIdentity.CognitoAuth;
    
            var authData = {
              ClientId : '60l91j98l2ot6i2oadpdhu2l18', // Your client id here
              AppWebDomain : 'infyhackaton-users.auth.us-east-2.amazoncognito.com',
              TokenScopesArray : ['aws.cognito.signin.user.admin','infyhackaton-api-hello/read','infyhackaton-api-hello/hello.read'], // e.g.['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'],
              RedirectUriSignIn : 'http://localhost:3000/welcome', 
              RedirectUriSignOut : 'http://localhost:3000/signOut',
              IdentityProvider : null, // e.g. 'Facebook',
              UserPoolId : 'us-east-2_8zfyrkUwT', // Your user pool id here
              AdvancedSecurityDataCollectionFlag : null, // e.g. true
                    Storage: null // OPTIONAL e.g. new CookieStorage(), to use the specified storage provided
            };
    
            var auth = new AmazonCognitoIdentity.CognitoAuth(authData);
            
            auth.userhandler = {
              onSuccess: function(result) {
                console.info("result ", result);
                console.debug("result ", result);
              },
              onFailure: function(err) {
                console.info("result ", err);
                console.debug("result ", err);
              }
            };
            
            console.info("auth ", auth);
            var session = auth.getSession();
            console.info("session ", session);
        }
    }
}


import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData= {
    UserPoolId: "us-east-1_zs3j03Pdf",
    ClientId: "490mdd65gbkc4p6eaeap0kpsfv"
}

export default new CognitoUserPool(poolData);

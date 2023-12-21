
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_GLEEGSDEVOPSDB_ARN
	STORAGE_GLEEGSDEVOPSDB_NAME
	STORAGE_GLEEGSDEVOPSDB_STREAMARN
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk')

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const id = event.body.id
    console.log('body',event.body)
    // Crée un objet DynamoDB pour l'utilisateur
    const dynamoDB = new AWS.DynamoDB();

    const params = {
        TableName: process.env.STORAGE_GLEEGSDEVOPSDB_NAME,
        Key: {
          id: {
            S: id,
          },
        },
    };

    // Effectue une requête de lecture sur la table
    const response = await dynamoDB.getItem(params).promise();
    console.log(response)
    // Récupère l'utilisateur
    const user = response.Item;

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: 'JSON.stringify(user)',
        // body: event.body
    };
};

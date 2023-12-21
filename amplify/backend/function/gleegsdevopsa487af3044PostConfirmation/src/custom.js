/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk')
exports.handler = async (event, context) => {

  // Récupère les données du User
  const user = event.userName;

  // Crée un objet DynamoDB pour l'utilisateur
  const dynamoDB = new AWS.DynamoDB();
  const item = {
    id: {
      S: event.userName,
    },
    email: {
      S:event.request.userAttributes.email
    },
    name: {
      S:event.request.userAttributes.name
    },
    family_name: {
      S:event.request.userAttributes.family_name
    }
  };

  // Ajoute l'utilisateur à la table DynamoDB
  const rslt = await dynamoDB.putItem({
    TableName: process.env.STORAGE_GLEEGSDEVOPSDB_NAME,
    Item: item,
  }).promise();
  // Renvoie l'événement
  return event;
};

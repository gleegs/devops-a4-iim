/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk')
exports.handler = async (event, context) => {

  console.log(event)
  // Récupère les données du User
  const user = event.userName;
  console.log('UserId :', user)

  // Crée un objet DynamoDB pour l'utilisateur
  const dynamoDB = new AWS.DynamoDB();
  const item = {
    id: event.userName,
    email: event.request.userAttributes.email,
    name: event.request.userAttributes.name,
    family_name: event.request.userAttributes.family_name
  };

  // Ajoute l'utilisateur à la table DynamoDB
  await dynamoDB.putItem({
    TableName: "users",
    Item: item,
  });

  // Renvoie l'événement
  return event;
};

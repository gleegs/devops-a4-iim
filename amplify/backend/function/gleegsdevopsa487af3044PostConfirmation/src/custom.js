/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {

  console.log(event)
  // Récupère les données du User
  const user = event.body;

  // Crée un objet DynamoDB pour l'utilisateur
  const dynamoDB = new AWS.DynamoDB();
  const item = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  // Ajoute l'utilisateur à la table DynamoDB
  await dynamoDB.putItem({
    TableName: "users",
    Item: item,
  });

  // Renvoie l'événement
  return event;
};

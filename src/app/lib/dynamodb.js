import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand,DeleteCommand, PutCommand, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";

// Initialize standard AWS DynamoDB Client
const client = new DynamoDBClient({
  region: process.env.SEC_AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.SEC_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.SEC_AWS_SECRET_ACCESS_KEY || "",
  },
});

// Wrap with DocumentClient for easy JavaScript object mapping
export const ddbDocClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

//#region Agreements


export async function getAgreementsListByLanguage(langCode = "pt") {
  const tableName = "marcarexames_std";
  console.log(">>"+ddbDocClient);
  const params = {
    TableName: tableName,
    KeyConditionExpression: "accesspattern = :pk AND begins_with(subok, :skPrefix)",
    ExpressionAttributeValues: {
      ":pk": "agreementslist",
      ":skPrefix": langCode.toLowerCase(),
    },
  };


    try {
        const command = new QueryCommand(params);
        const response = await ddbDocClient.send(command);
        const items = response.Items || [];

        // Remap field names here:
        return items.map((item) => ({
            id: item.subok,                             // e.g., rename subok -> id
            agreementslug: item.subok.split("#")[1],        // e.g., rename slug -> examslug
            agreementName: item.nome,            // e.g., format camelCase
        }));
    } catch (error) {
        console.error("DBD: Error querying DynamoDB for agreements list:", error);
        throw error;
    }
        
}

//#endregion


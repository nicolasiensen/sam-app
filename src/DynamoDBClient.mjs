import { DynamoDBClient as OriginalDynamoDBClient } from '@aws-sdk/client-dynamodb';

export class DynamoDBClient extends OriginalDynamoDBClient {
    constructor() {
        if (process.env.AWS_SAM_LOCAL) {
            super({endpoint: 'http://dynamo-local:8000'})
        } else {
            super({})
        }
    }
}

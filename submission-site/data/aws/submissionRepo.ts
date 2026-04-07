import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./dynamodb";

interface Submission {
  AuthorsName: string;
  AuthorsAge: number;
  StoryTitle: string;
  EmailAddress: string;
  PhoneNumber: string;
  ParentsName: string;
  Country: string;
  File: string;
  HasMarketingConsent: boolean;
  ReceiptID: string;
  IsComplete: boolean;
  SubmissionTimeStamp?: string;
}

function getPK(emailAddress: string): string {
  return `Visitor#${emailAddress}`;
}

function getSK(timestamp: string): string {
  return `Order#${timestamp}`;
}

function formatTimestamp(date: Date): string {
  return date.toISOString().replace(".000", "");
}

export async function putSubmission(submission: Submission): Promise<void> {
  const timestamp = formatTimestamp(new Date());
  console.log("Putting submission with PK:", getPK(submission.EmailAddress), "and SK:", getSK(timestamp));
  await docClient.send(
    new PutCommand({
      TableName: process.env.AWS_DYNAMODB_TABLE_NAME,
      Item: {
        PK: getPK(submission.EmailAddress),
        SK: getSK(timestamp),
        ...submission,
        SubmissionTimeStamp: timestamp,
      },
    })
  );
}
"use server";
import { uploadFileToS3 } from "@/data/aws/s3";
import { putSubmission } from "@/data/aws/submissionRepo";

export async function submitStory(formData: FormData) {
  console.log("Form data received:", Object.fromEntries(formData.entries()));

  //upload file to s3 and get the file key
  const file = formData.get("file") as File;
  // use this as the file key format 2021-12-20-105248.pdf
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const fileExtension = file.name.split(".").pop();
  const fileKey = `${timestamp}.${fileExtension}`;
  await uploadFileToS3(file, fileKey);

  const submission = {
    AuthorsName: formData.get("authorsname") as string,
    AuthorsAge: parseInt(formData.get("authorsage") as string),
    StoryTitle: formData.get("storytitle") as string,
    EmailAddress: formData.get("emailaddress") as string,
    PhoneNumber: formData.get("phonenumber") as string,
    ParentsName: formData.get("parentsname") as string,
    Country: formData.get("country") as string,
    File: fileKey,
    HasMarketingConsent: formData.get("hasmarketingconsent") === "true",
    IsComplete: true,
    ReceiptID: "124",
  };

  console.log("Received submission:", submission);

  await putSubmission(submission);
}

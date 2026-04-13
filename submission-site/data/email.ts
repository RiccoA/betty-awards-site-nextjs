import { Resend } from "resend";
import { Submission } from "./aws/submissionRepo";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAdminEmail(submission: Submission) {
  const {
    AuthorsName,
    AuthorsAge,
    StoryTitle,
    File,
    ParentsName,
    EmailAddress,
    PhoneNumber,
    Country,
    ReceiptID,
    SubmissionTimeStamp,
    HasMarketingConsent,
  } = submission;

  const marketingConsent = HasMarketingConsent ? "Yes" : "No";
  const fileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${File}`;

  const emailContent = `
    <div style="margin-bottom:20px;">
      <div><strong>Submission Information:</strong></div>
      <br />
      <div>Author's Name: ${AuthorsName}</div>
      <div>Author's Age: ${AuthorsAge}</div>
      <div>Story Title: ${StoryTitle}</div>
      <br />
      <div>Parent's Name: ${ParentsName}</div>
      <div>Email: ${EmailAddress}</div>
      <div>Phone Number: ${PhoneNumber}</div>
      <div>Country: ${Country}</div>
      <br />
      <div>Receipt ID: ${ReceiptID}</div>
      <div>Time Stamp: ${SubmissionTimeStamp}</div>
      <div>Consented to marketing email: ${marketingConsent}</div>
      <div>Contest Summer, 2026</div>
      <div>File: <a href="${fileUrl}">Story File</a></div>
    </div>
  `;

  const adminEmailList = process.env.ADMIN_EMAIL_LIST?.split(",").map(email => email.trim()) || [];

  await resend.emails.send({
    from: "Betty Award Admin <no-reply@thebettyaward.com>",
    to: adminEmailList,
    subject: "A new story has been submitted.",
    html: emailContent,
  });
}

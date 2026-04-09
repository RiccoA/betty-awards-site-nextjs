import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!,
  },
});

export async function uploadFileToS3(file: File, key: string): Promise<void> {
  const buffer = Buffer.from(await file.arrayBuffer());
  try {
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    });
    await s3Client.send(command);
    console.log(`File uploaded successfully to S3 with key: ${key}`);
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
}

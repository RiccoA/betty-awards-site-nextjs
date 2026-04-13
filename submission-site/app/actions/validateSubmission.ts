"use server";

export type ValidationResult =
  | { success: true }
  | { success: false; errors: Record<string, string> };

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
];
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const VALID_AGES = ["8", "9", "10", "11", "12"];
const VALID_COUNTRIES = ["United States"];

export async function validateSubmission(
  formData: FormData
): Promise<ValidationResult> {
  const errors: Record<string, string> = {};

  const authorsName = (formData.get("authorsname") as string)?.trim();
  const authorsAge = formData.get("authorsage") as string;
  const storyTitle = (formData.get("storytitle") as string)?.trim();
  const parentsName = (formData.get("parentsname") as string)?.trim();
  const emailAddress = (formData.get("emailaddress") as string)?.trim();
  const phoneNumber = (formData.get("phonenumber") as string)?.trim();
  const country = formData.get("country") as string;
  const file = formData.get("file") as File | null;

  if (!authorsName || authorsName.length === 0) {
    errors.authorsname = "Author's name is required.";
  } else if (authorsName.length > 100) {
    errors.authorsname = "Author's name must be 100 characters or fewer.";
  }

  if (!authorsAge || !VALID_AGES.includes(authorsAge)) {
    errors.authorsage = "Author's age must be between 8 and 12.";
  }

  if (!storyTitle || storyTitle.length === 0) {
    errors.storytitle = "Story title is required.";
  } else if (storyTitle.length > 100) {
    errors.storytitle = "Story title must be 100 characters or fewer.";
  }

  if (!parentsName || parentsName.length === 0) {
    errors.parentsname = "Authorizing adult's name is required.";
  } else if (parentsName.length > 100) {
    errors.parentsname = "Name must be 100 characters or fewer.";
  }

  if (!emailAddress || emailAddress.length === 0) {
    errors.emailaddress = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
    errors.emailaddress = "Please enter a valid email address.";
  } else if (emailAddress.length > 100) {
    errors.emailaddress = "Email must be 100 characters or fewer.";
  }

  if (!phoneNumber || phoneNumber.length === 0) {
    errors.phonenumber = "Phone number is required.";
  } else if (phoneNumber.length > 20) {
    errors.phonenumber = "Phone number must be 20 characters or fewer.";
  }

  if (!country || !VALID_COUNTRIES.includes(country)) {
    errors.country = "Please select a valid country.";
  }

  if (!file || file.size === 0) {
    errors.file = "A story file is required.";
  } else if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    errors.file = "File must be a PDF, Word document, or plain text file.";
  } else if (file.size > MAX_FILE_SIZE_BYTES) {
    errors.file = "File must be 5 MB or smaller.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return { success: true };
}

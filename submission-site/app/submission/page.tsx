import { uploadFileToS3 } from "@/data/aws/s3";
import { putSubmission } from "../../data/aws/submissionRepo";
import FileInput from "./FileInput";

export default function SubmissionPage() {
  // use env variable to determine if submission is enabled
  const submitEnabled = process.env.SUBMIT_ENABLED === "true";

  async function submitStory(formData: FormData) {
    "use server";
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

  return (
    <main className="container w-full pt-10 px-4 mx-auto mb-10 md:max-w-3xl">
      <div
        className="error-message bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4 hidden"
        role="alert"
      >
        <p className="font-bold">An Error Occurred</p>
        <p className="error-description"></p>
      </div>

      <h1 className="text-4xl mb-3">Submit Story For Summer 2026</h1>

      {!submitEnabled && (
        <div className="mt-4 mb-4 p-4 bg-gray-100">
          <h2 className="mb-1 ">
            Submission is currently paused for maintenance. Please come back in
            a few days to submit your story.
          </h2>
        </div>
      )}

      {submitEnabled && (
        <form action={submitStory}>
          <label className="block mb-4">
            <span className="block mb-2">
              Author's Name
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </span>
            <input
              type="text"
              id="authorsname"
              name="authorsname"
              placeholder=""
              required
              maxLength={100}
              className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
            />
          </label>

          <label className="block mb-4">
            <span className="block mb-2">
              Author's Age
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </span>
            <select
              required
              id="authorsage"
              name="authorsage"
              className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
            >
              <option value="">- Select -</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>

          <label className="block mb-4">
            <span className="block mb-2">
              Story Title
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </span>
            <input
              id="storytitle"
              name="storytitle"
              type="text"
              placeholder=""
              required
              maxLength={100}
              className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
            />
          </label>

          <label className="block mb-4">
            <span className="block mb-2">
              Upload Story File
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </span>
          </label>

          <FileInput />

          <label className="block mt-4 mb-4">
            <span className="block mb-2">
              Authorizing Adult's Name
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </span>
            <input
              type="text"
              id="parentsname"
              name="parentsname"
              placeholder=""
              required
              maxLength={100}
              className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
            />
          </label>

          <label className="block mb-4">
            <span className="block mb-2">
              Email Address
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </span>
            <input
              type="email"
              id="emailaddress"
              name="emailaddress"
              placeholder=""
              required
              maxLength={100}
              className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
            />
          </label>

          <label className="block mb-4">
            <span className="block mb-2">
              Phone Number
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </span>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              placeholder=""
              required
              maxLength={20}
              title="Please format your phone number as (123)-456-7890"
              className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
            />
          </label>

          <label className="block mb-4">
            <span className="block mb-2">
              Country
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </span>
            <select
              required
              id="country"
              name="country"
              className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-bluegray-300 text-bluegray-600 focus:outline-none focus:ring"
            >
              <option value="United States">United States</option>
            </select>
          </label>

          <div className="mb-2">
            <input id="permission-disclosure" type="checkbox" required />
            <label className="mb-2" htmlFor="permission-disclosure">
              I verify that the above-named child has my permission to enter
              this contest.
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </label>
          </div>

          <div className="mb-2">
            <input id="reproduction-disclosure" type="checkbox" required />
            <label className="mb-2" htmlFor="reproduction-disclosure">
              I agree on behalf of my child, that this website may reproduce
              their entry without payment to the child, other than any prize(s)
              they may be awarded.
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </label>
          </div>

          <div className="mb-2">
            <input id="originality-disclosure" type="checkbox" required />
            <label className="mb-2" htmlFor="originality-disclosure">
              I verify that the submitted story is the original work of my
              child.
              <span aria-hidden="true" className="required text-red-600">
                *
              </span>
            </label>
          </div>

          <div className="mb-2">
            <input
              id="marketing-consent"
              name="hasmarketingconsent"
              defaultChecked
              type="checkbox"
            />
            <label className="mb-2" htmlFor="marketing-consent">
              I would like to signup to receive email updates from The Betty
              Awards team.
            </label>
          </div>

          <div className="mt-4">
            <span aria-hidden="true" className="required text-red-600">
              *
            </span>
            Required Field
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </main>
  );
}

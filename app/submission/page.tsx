import { db } from '@/data/db';
import { storySubmissionsTable } from '@/data/schema';

export default function SubmissionPage() {
  async function submitStory(formData: FormData) {
    'use server'

    const storySubmission: typeof storySubmissionsTable.$inferInsert = {
      authorsName: formData.get('authorsname') as string,
      authorsAge: parseInt(formData.get('authorsage') as string, 10),
      storyTitle: formData.get('storytitle') as string,
      emailAddress: formData.get('emailaddress') as string,
      phoneNumber: formData.get('phonenumber') as string,
      parentsName: formData.get('parentsname') as string,
      country: formData.get('country') as string,
      hasMarketingConsent: formData.get('hasmarketingconsent') === 'on',
      isComplete: true, // Assuming the submission is complete
    }

    await db.insert(storySubmissionsTable).values(storySubmission)
  }

  return (
    <main>
      <div>Submission Page</div>
      <form action={submitStory}>
        <label className="block mb-4">
            <span className="block mb-2">Author's Name<span aria-hidden="true" className="required text-red-600">*</span></span>
            <input type="text" id="authorsname" name="authorsname" placeholder="" required maxLength={100} className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" />
        </label>

        <label className="block mb-4">
            <span className="block mb-2">Author's Age<span aria-hidden="true" className="required text-red-600">*</span></span>
            <select required id="authorsage" name="authorsage" className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring">
                <option value="">- Select -</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
        </label>

        <label className="block mb-4">
            <span className="block mb-2">Story Title<span aria-hidden="true" className="required text-red-600">*</span></span>
            <input id="storytitle" name="storytitle" type="text" placeholder="" required maxLength={100} className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" />
        </label>

        <label className="block mb-4">
            <span className="block mb-2">Authorizing Adult's Name<span aria-hidden="true" className="required text-red-600">*</span></span>
            <input type="text" id="parentsname" name="parentsname" placeholder="" required maxLength={100} className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" />
        </label>

        <label className="block mb-4">
            <span className="block mb-2">Email Address<span aria-hidden="true" className="required text-red-600">*</span></span>
            <input type="email" id="emailaddress" name="emailaddress" placeholder="" required maxLength={100} className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" />
        </label>

        <label className="block mb-4">
            <span className="block mb-2">Phone Number<span aria-hidden="true" className="required text-red-600">*</span></span>
            <input type="tel"
                   id="phonenumber"
                   name="phonenumber"
                   placeholder=""
                   required
                   maxLength={20}
                   title="Please format your phone number as (123)-456-7890"
                   className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring" />
        </label>

        <label className="block mb-4">
          <span className="block mb-2">Country<span aria-hidden="true" className="required text-red-600">*</span></span>
          <select required id="country" name="country" className="relative w-full px-3 py-4 text-sm bg-white  border border-gray-300  rounded shadow outline-none placeholder-bluegray-300 text-bluegray-600 focus:outline-none focus:ring">
                <option value="United States">United States</option>
          </select>
        </label>

        <div className="mb-2">
            <input id="disclosure1" type="checkbox" required />
            <label className="mb-2" htmlFor="disclosure1">
                I verify that the above-named child has my
                permission to enter this contest.
                <span aria-hidden="true" className="required text-red-600">*</span>
            </label>
        </div>

        <div className="mb-2">
            <input id="disclosure2" type="checkbox" required />
            <label className="mb-2" htmlFor="disclosure2">
                I agree on behalf of my
                child, that this website may reproduce their entry
                without payment to the child, other than any prize(s)
                they may be awarded.
                <span aria-hidden="true" className="required text-red-600">*</span>
            </label>
        </div>

        <div className="mb-2">
            <input id="disclosure3" type="checkbox" required />
            <label className="mb-2" htmlFor="disclosure3">
                I verify that the submitted story
                is the original work of my child.
                <span aria-hidden="true" className="required text-red-600">*</span>

            </label>
        </div>

        <div className="mb-2">
            <input id="disclosure4" name="hasmarketingconsent" defaultChecked type="checkbox" />
            <label className="mb-2" htmlFor="disclosure4">
                I would like to signup to receive email updates from The Betty Awards team.
            </label>
        </div>

        <div className="mt-4">
            <span aria-hidden="true" className="required text-red-600">*</span>Required Field
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

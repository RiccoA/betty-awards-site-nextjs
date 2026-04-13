"use client";
import { useState, useRef } from "react";
import StripePaymentForm from "./StripePaymentForm";
import FileInput from "./FileInput";
import { submitStory } from "../actions/submitStory";

export default function SubmissionPage() {
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);
  const paymentIntentIdRef = useRef<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handlePaymentSuccess(id: string) {
    paymentIntentIdRef.current = id;
    setPaymentIntentId(id);
    formRef.current?.requestSubmit();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!paymentIntentIdRef.current) return;

    const formData = new FormData(formRef.current!);
    formData.set("paymentIntentId", paymentIntentIdRef.current);

    await submitStory(formData); // your existing server action
  }

  return (
    <main className="container w-full pt-10 px-4 mx-auto mb-10 md:max-w-3xl">
      <h1 className="text-4xl mb-3">Submit Story For Summer 2026</h1>

      <form ref={formRef} onSubmit={handleSubmit}>
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
            I verify that the above-named child has my permission to enter this
            contest.
            <span aria-hidden="true" className="required text-red-600">
              *
            </span>
          </label>
        </div>

        <div className="mb-2">
          <input id="reproduction-disclosure" type="checkbox" required />
          <label className="mb-2" htmlFor="reproduction-disclosure">
            I agree on behalf of my child, that this website may reproduce their
            entry without payment to the child, other than any prize(s) they may
            be awarded.
            <span aria-hidden="true" className="required text-red-600">
              *
            </span>
          </label>
        </div>

        <div className="mb-2">
          <input id="originality-disclosure" type="checkbox" required />
          <label className="mb-2" htmlFor="originality-disclosure">
            I verify that the submitted story is the original work of my child.
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


      {!paymentIntentId ? (
        <StripePaymentForm onPaymentSuccess={handlePaymentSuccess} />
      ) : (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
          ✓ Payment confirmed — submitting your entry...
        </div>
      )}

      </form>

    </main>
  );
}

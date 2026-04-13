"use client";
import { useState, useRef } from "react";
import StripePaymentForm from "./StripePaymentForm";
import FileInput from "./FileInput";
import { submitStory } from "../actions/submitStory";
import {
  validateSubmission,
  type ValidationResult,
} from "../actions/validateSubmission";

export default function SubmissionPage() {
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);
  const paymentIntentIdRef = useRef<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isValidated, setIsValidated] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const isFormEnabled = process.env.NEXT_PUBLIC_SUBMIT_ENABLED === "true"; // Set to false to disable the form for maintenance

  async function handleValidate() {
    if (!formRef.current) return;
    setIsValidating(true);
    setValidationErrors({});

    const formData = new FormData(formRef.current);
    const result: ValidationResult = await validateSubmission(formData);

    if (result.success) {
      setIsValidated(true);
    } else {
      setValidationErrors(result.errors);
    }
    setIsValidating(false);
  }

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

    await submitStory(formData);
  }

  return (
    <main className="container w-full pt-10 px-4 mx-auto mb-10 md:max-w-3xl">
      <h1 className="text-4xl mb-3">Story Submission for Summer 2026</h1>

      {!isFormEnabled && (
        <div className="p-4 bg-gray-100 border border-gray-300 text-gray-700">
          <p className="mb-1">
            Submission is currently down for maintenance. Please check back to
            submit your story.
          </p>
        </div>
      )}

      {paymentIntentId && isFormEnabled && (
        <>
          <h2 className="text-2xl mb-3">
            Receipt #:
            <span id="receipt-id">{paymentIntentId}</span>
          </h2>
          <p className="mb-3">Your story has been submitted!</p>
          <p className="mb-3">
            If your story is selected as a winner, you will be contacted by the
            Betty Awards team. If you have any questions, please{" "}
            <a
              className="text-blue-600 hover:text-indigo-700 underline"
              href="/contact-us"
            >
              contact us.
            </a>
          </p>
        </>
      )}

      {!paymentIntentId && isFormEnabled && (
        <>
          <div className="mt-4 mb-4 p-4 bg-gray-100">
            <div className="mb-8">
              <h2 className="mb-1 text-xl font-bold uppercase">
                Contest Rules:{" "}
              </h2>
              <ul className="leading-8 list-decimal list-inside content-rules ">
                <li>Entries must be typed and in English.</li>
                <li>Maximum story length is 1000 words.</li>
                <li>Entries can be fiction, non-fiction or poems.</li>
                <li>
                  Kids may choose any topic, as long as it is age-appropriate.
                </li>
                <li>Contest is open to all children, worldwide, ages 8-12.</li>
                <li>
                  Entries must be the original unpublished work of the child
                  entering the contest.
                </li>
                <li>
                  More than one entry per child is allowed. Each entry must pay
                  the $20 fee.
                </li>
              </ul>
            </div>
            <p className="mt-8 mb-4">
              Find the application form below. Note that there is a $20.00
              application fee for each entry.
            </p>
          </div>

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
                their entry without payment to the child, other than any
                prize(s) they may be awarded.
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

            {Object.keys(validationErrors).length > 0 && (
              <div className="mt-4 p-3 bg-red-50 border border-red-300 rounded text-red-700">
                <p className="font-semibold mb-1">
                  Please fix the following errors:
                </p>
                <ul className="list-disc list-inside">
                  {Object.values(validationErrors).map((msg) => (
                    <li key={msg}>{msg}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-2xl text-right mt-4 mb-4">
              Application Fee: $20.00
            </p>

            {isValidated ? (
              <StripePaymentForm onPaymentSuccess={handlePaymentSuccess} />
            ) : (
              <button
                type="button"
                onClick={handleValidate}
                disabled={isValidating}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                {isValidating ? "Checking..." : "Continue to Payment"}
              </button>
            )}
          </form>
        </>
      )}
    </main>
  );
}

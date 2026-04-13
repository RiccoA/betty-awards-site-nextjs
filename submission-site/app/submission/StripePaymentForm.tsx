// app/submission/StripePaymentForm.tsx
"use client";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "../actions/createPaymentIntent";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm({ onPaymentSuccess }: { onPaymentSuccess: (paymentIntentId: string) => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleClick() {
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required", // avoids redirect for card payments
    });

    if (error) {
      setErrorMessage(error.message ?? "Payment failed");
    } else if (paymentIntent?.status === "succeeded") {
      onPaymentSuccess(paymentIntent.id);
    }

    setIsLoading(false);
  }

  return (
    <div>
      <PaymentElement />
      {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
      <button
        type="button"
        onClick={handleClick}
        disabled={!stripe || isLoading}
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {isLoading ? "Processing..." : "Pay & Submit"}
      </button>
    </div>
  );
}

export default function StripePaymentForm({ onPaymentSuccess }: { onPaymentSuccess: (id: string) => void }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    createPaymentIntent().then(({ clientSecret }) => setClientSecret(clientSecret!));
  }, []);

  if (!clientSecret) return <p>Loading payment form...</p>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm onPaymentSuccess={onPaymentSuccess} />
    </Elements>
  );
}
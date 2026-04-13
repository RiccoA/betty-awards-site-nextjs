"use server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createPaymentIntent() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000, // in cents, e.g. $20.00
    currency: "usd",
    automatic_payment_methods: { enabled: false },
    payment_method_types: ["card"],
  });
  return { clientSecret: paymentIntent.client_secret };
}
"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export function QuoteForm() {
  // One useState for each input — tracks what the user has typed
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Submission state: idle → submitting → success or error
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Stop the browser's default form behavior (page reload)
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Send the data to Supabase. This inserts a new row in the
    // quote_request table with these field values.
    const { error } = await supabase
      .from("quote_request")
      .insert({ name, email, phone, message });

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
      return;
    }

    // Success! Clear the inputs and show the thank-you state.
    setStatus("success");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  // If submission succeeded, show a thank-you message instead of the form.
  if (status === "success") {
    return (
      <div className="bg-white border border-stone-200 rounded-md p-8 md:p-10 text-center">
        <p className="text-amber-700 text-xs uppercase tracking-[0.2em] font-medium mb-4">
          Quote request sent
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3 leading-tight">
          We&apos;ll be in touch within 24 hours.
        </h3>
        <p className="text-stone-600">
          Thanks for reaching out. A member of our team will review your
          request and follow up soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-stone-200 rounded-md p-8 md:p-10 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-stone-900 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(612) 555-0199"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-stone-900 transition-colors"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-stone-700 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-stone-900 transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-stone-700 mb-2"
        >
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="I'm looking to replace 6 windows on the second floor..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:border-stone-900 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-6 py-4 rounded-md text-base font-medium hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Quote Request"}
        {status !== "submitting" && <span aria-hidden>→</span>}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-700 pt-2">
          Something went wrong: {errorMessage}. Please try again or call us
          directly.
        </p>
      )}
      <p className="text-xs text-stone-500 pt-2">
        We respond within 24 hours. Your info stays private — no spam, no
        sharing.
      </p>
    </form>
  );
}

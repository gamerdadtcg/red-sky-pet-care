"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Dog walking",
  "Drop-in visit",
  "Overnight sitting",
  "Cat care",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const pet = String(data.get("pet") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !pet || !service || !message) {
      setStatus("error");
      setErrorMessage("Please fill in every field so we can plan the right visit.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("That email doesn’t look quite right — try again?");
      return;
    }

    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 650);
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-primary/20 bg-white/80 p-8 shadow-sm backdrop-blur-sm"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl text-cedar-deep">Inquiry received</p>
        <p className="mt-3 max-w-md text-muted-foreground leading-relaxed">
          Thanks for reaching out to Red Sky Pet Care. This demo saves nothing
          on a server yet — in production, Travis would get your note by email
          and follow up within one business day.
        </p>
        <Button
          type="button"
          className="mt-6 h-11 px-5"
          onClick={() => setStatus("idle")}
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" autoComplete="name" placeholder="Alex Rivera" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@email.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pet">Pet name &amp; type</Label>
          <Input id="pet" name="pet" placeholder="Mochi, 3-year-old corgi" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service needed</Label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Dates &amp; notes</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Weekend of May 16–18 in Canyon Country. Mochi loves sniff walks and needs meds at 7pm."
            className="min-h-28"
          />
        </div>
      </div>

      {status === "error" ? (
        <p className="mt-4 text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-11 px-6 text-base"
        >
          {status === "submitting" ? "Sending…" : "Send booking inquiry"}
        </Button>
        <p className="text-sm text-muted-foreground">
          Client-side demo — no account or payment required.
        </p>
      </div>
    </form>
  );
}

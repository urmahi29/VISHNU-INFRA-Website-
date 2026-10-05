import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { projectTypes } from "@/data/site";

type Fields = {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

const empty: Fields = {
  name: "",
  company: "",
  phone: "",
  email: "",
  projectType: "",
  message: "",
};

const inputClass =
  "h-12 w-full border border-input bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.projectType) next.projectType = "Please select a project type.";
    if (values.message.trim().length < 10)
      next.message = "Please describe your requirement (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Enquiry delivery (email/backend) can be connected here later.
    setSent(true);
    setValues(empty);
  };

  if (sent) {
    return (
      <div className="card-industrial flex flex-col items-center px-8 py-16 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden />
        <h3 className="mt-5 text-2xl uppercase">Enquiry Ready to Send</h3>
        <p className="mt-3 max-w-md text-muted-foreground">
          Your details have been captured in this form. Email delivery is not connected
          yet — for an immediate response, please call or WhatsApp us.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 inline-flex h-12 items-center bg-primary px-7 font-display text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-gold"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-industrial p-6 lg:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name} required htmlFor="name">
          <input
            id="name"
            name="name"
            className={inputClass}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            placeholder="Your name"
          />
        </Field>
        <Field label="Company / Organization" htmlFor="company">
          <input
            id="company"
            name="company"
            className={inputClass}
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            placeholder="Optional"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone} required htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            placeholder="+91"
          />
        </Field>
        <Field label="Email Address" error={errors.email} required htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            className={inputClass}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            placeholder="name@example.com"
          />
        </Field>
        <Field
          label="Project Type"
          error={errors.projectType}
          required
          htmlFor="projectType"
          className="sm:col-span-2"
        >
          <select
            id="projectType"
            name="projectType"
            className={inputClass}
            value={values.projectType}
            onChange={(e) => set("projectType", e.target.value)}
            aria-invalid={!!errors.projectType}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Message"
          error={errors.message}
          required
          htmlFor="message"
          className="sm:col-span-2"
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`${inputClass} h-auto py-3`}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={!!errors.message}
            placeholder="Tell us about your project requirement"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex h-14 w-full items-center justify-center bg-primary px-8 font-display text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-gold sm:w-auto"
      >
        Send Enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  required?: boolean | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-display text-sm font-semibold uppercase tracking-[0.14em] text-foreground"
      >
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

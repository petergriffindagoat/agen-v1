'use client'

import { useState, type FormEvent } from 'react'
import { Input, Textarea } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Wire up to the contact API route when it exists.
      // For now we simulate a successful submission after a short delay.
      await new Promise<void>((resolve) => setTimeout(resolve, 1500))

      // Uncomment to wire up the real endpoint:
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // })
      // if (!res.ok) throw new Error('Something went wrong. Please try again.')

      setSuccess(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  /* Success state */
  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center text-center py-16 px-8 bg-paper rounded-lg border border-[oklch(78%_0.008_75)]"
      >
        {/* Checkmark */}
        <div
          aria-hidden="true"
          className="w-12 h-12 rounded-full bg-chalk border-2 border-ember flex items-center justify-center mb-4"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 10L8 14L16 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-ember"
            />
          </svg>
        </div>

        <p className="font-display text-xl font-normal text-graphite mb-2">
          You&rsquo;re on the list
        </p>
        <p className="font-body text-base text-muted leading-normal">
          We&rsquo;ll be in touch within 1 business day.
        </p>
      </div>
    )
  }

  /* Form state */
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
      aria-label="Contact form"
    >
      {/* Name */}
      <Input
        label="Name"
        name="name"
        type="text"
        placeholder="Your name"
        required
        autoComplete="name"
        value={form.name}
        onChange={handleChange}
        disabled={loading}
      />

      {/* Email */}
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="you@company.com"
        required
        autoComplete="email"
        value={form.email}
        onChange={handleChange}
        disabled={loading}
      />

      {/* Company */}
      <Input
        label="Company"
        name="company"
        type="text"
        placeholder="Acme Inc. (optional)"
        autoComplete="organization"
        value={form.company}
        onChange={handleChange}
        disabled={loading}
      />

      {/* Message */}
      <Textarea
        label="What do you want to automate?"
        name="message"
        placeholder="Describe the workflow or bottleneck you're trying to solve…"
        rows={3}
        value={form.message}
        onChange={handleChange}
        disabled={loading}
      />

      {/* Error message */}
      {error && (
        <p role="alert" className="font-body text-sm text-error">
          {error}
        </p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={loading}
        disabled={loading}
        className="w-full mt-1"
      >
        Book the call
      </Button>
    </form>
  )
}

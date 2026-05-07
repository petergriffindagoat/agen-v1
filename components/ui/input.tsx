'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

/* ─────────────────────────────────────────────
   SHARED STYLE CONSTANTS
   ───────────────────────────────────────────── */

const fieldClasses = [
  'w-full bg-paper border border-[oklch(78%_0.008_75)] rounded-md',
  'px-3 py-2.5 text-base text-graphite placeholder:text-subtle',
  'focus:border-ember focus:outline-2 focus:outline-ember focus:outline-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed',
  'transition-colors duration-100',
].join(' ')

const labelClasses = 'font-body text-sm font-medium text-graphite mb-2 block'
const errorClasses = 'text-sm text-error mt-1'
const hintClasses = 'text-sm text-subtle mt-1'

/* ─────────────────────────────────────────────
   INPUT
   ───────────────────────────────────────────── */

type NativeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'id' | 'aria-describedby'
>

export interface InputProps extends NativeInputProps {
  label?: string
  error?: string
  hint?: string
  className?: string
  inputClassName?: string
}

export function Input({
  label,
  error,
  hint,
  className,
  inputClassName,
  ...props
}: InputProps) {
  const uid = useId()
  const inputId = `input-${uid}`
  const errorId = error ? `error-${uid}` : undefined
  const hintId = hint ? `hint-${uid}` : undefined

  const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined

  return (
    <div className={cn('flex flex-col', className)}>
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-describedby={describedBy}
        aria-invalid={error ? 'true' : undefined}
        className={cn(fieldClasses, error && 'border-error focus:outline-error', inputClassName)}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className={errorClasses}>
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={hintId} className={hintClasses}>
          {hint}
        </p>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   TEXTAREA
   ───────────────────────────────────────────── */

type NativeTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'id' | 'aria-describedby'
>

export interface TextareaProps extends NativeTextareaProps {
  label?: string
  error?: string
  hint?: string
  className?: string
  textareaClassName?: string
}

export function Textarea({
  label,
  error,
  hint,
  className,
  textareaClassName,
  ...props
}: TextareaProps) {
  const uid = useId()
  const textareaId = `textarea-${uid}`
  const errorId = error ? `error-${uid}` : undefined
  const hintId = hint ? `hint-${uid}` : undefined

  const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined

  return (
    <div className={cn('flex flex-col', className)}>
      {label && (
        <label htmlFor={textareaId} className={labelClasses}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        aria-describedby={describedBy}
        aria-invalid={error ? 'true' : undefined}
        className={cn(
          fieldClasses,
          'min-h-[96px] resize-y',
          error && 'border-error focus:outline-error',
          textareaClassName,
        )}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className={errorClasses}>
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={hintId} className={hintClasses}>
          {hint}
        </p>
      )}
    </div>
  )
}

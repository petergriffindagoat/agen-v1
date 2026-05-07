import Image from 'next/image'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

export interface AuthorBioProps {
  name: string
  avatar?: string
  bio: string
  twitterHandle?: string
  linkedinUrl?: string
}

/* ─────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────── */

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function AuthorBio({
  name,
  avatar,
  bio,
  twitterHandle,
  linkedinUrl,
}: AuthorBioProps) {
  const initials = getInitials(name)

  return (
    <div className="border border-[oklch(78%_0.008_75)] rounded-lg p-6 flex gap-4 mt-12">
      {/* Avatar */}
      <div className="flex-shrink-0">
        {avatar ? (
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        ) : (
          <div
            className="bg-paper text-muted font-medium text-base rounded-full w-16 h-16 flex items-center justify-center select-none"
            aria-hidden="true"
          >
            {initials}
          </div>
        )}
      </div>

      {/* Right side */}
      <div className="min-w-0">
        {/* Name */}
        <p className="font-body text-base font-semibold text-graphite">
          {name}
        </p>

        {/* Bio */}
        <p className="font-body text-sm text-muted leading-normal mt-1">
          {bio}
        </p>

        {/* Social links */}
        {(twitterHandle || linkedinUrl) && (
          <div className="mt-3 flex gap-3">
            {twitterHandle && (
              <a
                href={`https://twitter.com/${twitterHandle.replace(/^@/, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ember hover:text-ember-dim underline underline-offset-2 transition-colors"
              >
                Twitter
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ember hover:text-ember-dim underline underline-offset-2 transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

import type { Metadata } from 'next'

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Privacy Policy — Perpetual Stack',
  robots: { index: true, follow: true },
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function PrivacyPage() {
  return (
    <section className="section-light pt-40">
      <div className="prose-body max-w-[40rem] mx-auto px-6">
        <p className="font-mono text-xs text-ember uppercase tracking-[0.12em] mb-4">
          Legal
        </p>
        <h1 className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite mb-2">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-subtle mb-12">
          Last updated: April 1, 2026
        </p>

        <div className="prose-article font-body text-base text-muted leading-relaxed space-y-8">

          <section>
            <h2>Overview</h2>
            <p>
              Perpetual Stack ("we," "us," or "our") is a software engineering consultancy
              that builds AI agents and workflow automation systems. This policy explains what
              information we collect through our website at perpetualstack.com, how we use it,
              and what rights you have with respect to it.
            </p>
            <p>
              We collect the minimum amount of information needed to respond to inquiries and
              improve our site. We do not sell your data. We do not share it with third parties
              except as described below.
            </p>
          </section>

          <section>
            <h2>What we collect</h2>
            <h3>Contact form submissions</h3>
            <p>
              When you submit our contact form, we collect your name, email address, company
              name (if provided), and the message you send. We use this information solely to
              respond to your inquiry. We retain contact form submissions for 24 months and then
              delete them unless an ongoing business relationship requires longer retention.
            </p>
            <h3>Analytics</h3>
            <p>
              We use privacy-respecting analytics to understand how visitors use our site —
              which pages are viewed, how visitors navigate between them, and which content is
              most useful. Our analytics setup collects no personally identifiable information,
              uses no cookies, and cannot be used to track individuals across sites. No data is
              shared with advertising networks.
            </p>
            <h3>Server logs</h3>
            <p>
              Our hosting provider collects standard web server logs, which include IP addresses,
              browser type, referring URLs, and timestamps. These logs are used for security
              monitoring and are retained for 30 days.
            </p>
          </section>

          <section>
            <h2>How we use your information</h2>
            <p>We use collected information for two purposes only:</p>
            <ul>
              <li>
                <strong>To respond to inquiries.</strong> When you contact us, we use your
                name and email to reply. We do not add you to a mailing list without your
                explicit consent.
              </li>
              <li>
                <strong>To improve the site.</strong> Aggregate, anonymized analytics help us
                understand which content is valuable and how to improve the site experience.
              </li>
            </ul>
          </section>

          <section>
            <h2>What we do not do</h2>
            <ul>
              <li>We do not sell your personal information to any third party.</li>
              <li>
                We do not share your personal information with advertisers, data brokers, or
                marketing platforms.
              </li>
              <li>
                We do not use contact form submissions for marketing outreach unless you have
                explicitly asked to hear from us.
              </li>
              <li>We do not use tracking cookies or cross-site tracking.</li>
            </ul>
          </section>

          <section>
            <h2>Third-party services</h2>
            <p>
              Our website is hosted on infrastructure provided by Vercel. Contact form
              submissions are processed through our own API endpoints and stored in our own
              systems — not in third-party CRMs or marketing platforms.
            </p>
            <p>
              If you engage us for a project, separate data processing agreements may apply to
              the work we do with your systems. Those agreements are handled at the engagement
              level and are separate from this policy.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of any personal information
              we hold about you. To make a request, email{' '}
              <a href="mailto:privacy@perpetualstack.com">privacy@perpetualstack.com</a>. We
              will respond within 30 days.
            </p>
            <p>
              If you are located in the European Economic Area, you have rights under the GDPR
              including the right to data portability and the right to lodge a complaint with a
              supervisory authority.
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              If we make material changes to this policy, we will update the "Last updated" date
              at the top of this page. We will not retroactively apply changes to information
              already collected in ways that would reduce your privacy rights without your consent.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about this policy or requests regarding your data should be sent to:{' '}
              <a href="mailto:privacy@perpetualstack.com">privacy@perpetualstack.com</a>
            </p>
          </section>

        </div>
      </div>
    </section>
  )
}

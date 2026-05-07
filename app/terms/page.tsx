import type { Metadata } from 'next'

/* ─────────────────────────────────────────────
   METADATA
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Terms of Service — Perpetual Stack',
  robots: { index: true, follow: true },
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function TermsPage() {
  return (
    <section className="section-light pt-40">
      <div className="prose-body max-w-[40rem] mx-auto px-6">
        <p className="font-mono text-xs text-ember uppercase tracking-[0.12em] mb-4">
          Legal
        </p>
        <h1 className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite mb-2">
          Terms of Service
        </h1>
        <p className="font-mono text-xs text-subtle mb-12">
          Last updated: April 1, 2026
        </p>

        <div className="prose-article font-body text-base text-muted leading-relaxed space-y-8">

          <section>
            <h2>Overview</h2>
            <p>
              These Terms of Service govern your use of the Perpetual Stack website at
              perpetualstack.com (the "Site") and any services you engage us to provide. By
              accessing the Site, you agree to these terms. If you do not agree, please do not
              use the Site.
            </p>
            <p>
              Perpetual Stack LLC ("Perpetual Stack," "we," "us," or "our") is a software
              engineering consultancy based in the United States. These terms apply to use of
              our public website. Services we provide to clients are governed by separate
              engagement agreements.
            </p>
          </section>

          <section>
            <h2>Services and engagement agreements</h2>
            <p>
              Perpetual Stack provides software engineering, AI agent development, workflow
              automation, and integration services to business clients. The specific scope,
              deliverables, timeline, and fees for any engagement are defined in a written
              agreement between Perpetual Stack and the client.
            </p>
            <p>
              Nothing on this website constitutes an offer to provide services or a binding
              commitment. Submitting a contact form or scheduling a call does not create an
              engagement. An engagement begins only when both parties have signed a written
              agreement.
            </p>
            <p>
              In the event of any conflict between these Terms and a signed engagement agreement,
              the engagement agreement controls with respect to the services it covers.
            </p>
          </section>

          <section>
            <h2>Website use</h2>
            <p>
              The content on this Site — including text, case studies, blog posts, and other
              materials — is provided for informational purposes only. We make reasonable efforts
              to keep the information accurate and current, but we do not warrant its completeness
              or accuracy.
            </p>
            <p>
              You may access and read the Site for personal and professional informational
              purposes. You may not scrape, reproduce, or distribute Site content without our
              written permission, except where permitted by applicable law.
            </p>
            <p>
              You agree not to use the Site in any way that is unlawful, harmful, or that could
              damage, disable, or impair the Site or interfere with any other party's use of it.
            </p>
          </section>

          <section>
            <h2>Intellectual property</h2>
            <p>
              All content on this Site, including blog posts, case studies, design, and code, is
              owned by Perpetual Stack or its licensors and is protected by applicable copyright,
              trademark, and other intellectual property laws.
            </p>
            <p>
              For client engagements, intellectual property ownership is specified in the
              engagement agreement. Absent a specific agreement to the contrary, client-specific
              deliverables (code, configurations, documentation) written for a client's systems
              transfer to the client upon final payment. Perpetual Stack retains rights to
              general methodologies, tools, and know-how developed independently of the
              engagement.
            </p>
          </section>

          <section>
            <h2>Disclaimer of warranties</h2>
            <p>
              The Site and its contents are provided "as is" without warranty of any kind,
              express or implied. Perpetual Stack makes no warranties that the Site will be
              uninterrupted, error-free, or free of harmful components.
            </p>
            <p>
              Information on the Site, including case study results, reflects past performance
              and is not a guarantee of future results. Results vary by client, use case, and
              implementation.
            </p>
          </section>

          <section>
            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Perpetual Stack shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages
              arising from your use of, or inability to use, the Site or its content.
            </p>
            <p>
              Perpetual Stack's total liability to you for any claim arising from your use of
              the Site shall not exceed one hundred US dollars ($100). Limitations of liability
              for client engagements are specified in the applicable engagement agreement.
            </p>
          </section>

          <section>
            <h2>Third-party links</h2>
            <p>
              The Site may contain links to third-party websites. Those sites are not under our
              control and we are not responsible for their content, privacy practices, or
              availability. Links do not imply endorsement.
            </p>
          </section>

          <section>
            <h2>Governing law</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, United States,
              without regard to its conflict of law provisions. Any dispute arising from these
              Terms shall be resolved in the courts of Delaware.
            </p>
          </section>

          <section>
            <h2>Changes to these terms</h2>
            <p>
              We may update these Terms from time to time. We will update the "Last updated"
              date at the top of this page when we do. Continued use of the Site after changes
              are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about these Terms should be directed to:{' '}
              <a href="mailto:legal@perpetualstack.com">legal@perpetualstack.com</a>
            </p>
          </section>

        </div>
      </div>
    </section>
  )
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Astana POS",
  description:
    "Terms governing your use of Astana POS and related services provided by Astana Solutions (M) Sdn Bhd.",
};

const COMPANY = "Astana Solutions (M) Sdn Bhd";
const REG = "202001004296 (1360616-V)";
const PRODUCT = "Astana POS";
const EMAIL = "support@astanabiz.com";
const PHONE = "+603 3396 5656";
const ADDRESS = "No 19A Jalan Astana Alam E13/E, Bandar Puncak Alam, 42300 Selangor, Malaysia";
const EFFECTIVE = "1 June 2026";

export default function TermsPage() {
  return (
    <main id="main" className="relative isolate">
      {/* Header */}
      <div
        className="py-16 md:py-24"
        style={{ background: "var(--gradient-night)" }}
      >
        <div className="mx-auto max-w-[820px] px-6 md:px-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-white/50">
            Legal
          </p>
          <h1
            className="mt-4 font-display font-bold tracking-[-0.025em] text-white"
            style={{ fontSize: "var(--text-display-lg)", lineHeight: "var(--text-display-lg--line-height)" }}
          >
            Terms of Service
          </h1>
          <p className="mt-4 text-white/60">
            Effective date: {EFFECTIVE} &nbsp;·&nbsp; Last reviewed: {EFFECTIVE}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[820px] px-6 py-16 md:px-10 md:py-20">
        <div className="prose prose-neutral max-w-none text-[var(--color-ink)]">

          <p className="lead">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of {PRODUCT} and related services (&ldquo;Services&rdquo;) provided by <strong>{COMPANY}</strong> (Registration No. {REG}) (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By registering an account or using the Services, you agree to be bound by these Terms.
          </p>
          <p>
            If you do not agree, do not use the Services.
          </p>

          <Section title="1. The Services">
            <p>
              {PRODUCT} is a cloud-based point-of-sale and business management software accessible via mobile app (Android) and web browser. The Services include the {PRODUCT} application, Astana Hub (backoffice portal), associated APIs, and customer support — collectively referred to as &ldquo;Services&rdquo;.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the Services at any time with reasonable notice. We will not be liable for any modification, suspension, or discontinuation where notice has been given.
            </p>
          </Section>

          <Section title="2. Account Registration">
            <p>
              To use the Services, you must register an account through the Astana Hub. You agree to:
            </p>
            <ul>
              <li>Provide accurate, complete, and up-to-date information</li>
              <li>Maintain the confidentiality of your login credentials</li>
              <li>Notify us immediately of any unauthorised access to your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>
            <p>
              Accounts are for business use. You must be at least 18 years of age and authorised to enter into binding agreements on behalf of your business to register.
            </p>
          </Section>

          <Section title="3. Free Trial">
            <p>
              New accounts are entitled to a <strong>30-day free trial</strong> with full access to subscribed modules. No credit card or upfront payment is required to start a trial.
            </p>
            <p>
              At the end of the trial period, continued use of premium modules requires an active subscription. Trial data is preserved if you subscribe. We reserve the right to modify or end trial offers at any time for new registrations.
            </p>
          </Section>

          <Section title="4. Subscriptions and Pricing">
            <p>
              Subscriptions are available on a per-module, per-store basis:
            </p>
            <ul>
              <li><strong>Monthly plan</strong>: RM 79 per module per store per month</li>
              <li><strong>Annual plan</strong>: RM 790 per module per store per year</li>
            </ul>
            <p>
              Available subscription modules: Unlimited Sales History, Unlimited Employee Management, Unlimited Inventory Management. Pricing is subject to change with 30 days&apos; written notice.
            </p>
            <p>
              Subscriptions are processed via WhatsApp with our authorised team. We currently do not offer automated online payment; all subscription arrangements are confirmed in writing by our team.
            </p>
            <p>
              <strong>Renewals:</strong> Subscriptions do not auto-renew. Our team will contact you prior to expiry. Non-renewal results in the affected module reverting to read-only access.
            </p>
            <p>
              <strong>Refunds:</strong> All payments are non-refundable except where required by Malaysian consumer protection law, or where a service failure of significant duration is attributable solely to us.
            </p>
          </Section>

          <Section title="5. Acceptable Use">
            <p>You agree not to:</p>
            <ul>
              <li>Use the Services for any unlawful purpose or in violation of Malaysian law</li>
              <li>Attempt to gain unauthorised access to any part of the Services or other users&apos; accounts</li>
              <li>Reverse-engineer, decompile, or attempt to extract the source code of our software</li>
              <li>Resell or sublicense access to the Services without our written consent</li>
              <li>Upload malicious code, conduct denial-of-service attacks, or interfere with the Services&apos; integrity</li>
              <li>Use the Services to process data relating to illegal activities</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts in breach of this section without notice.
            </p>
          </Section>

          <Section title="6. Your Data">
            <p>
              You retain ownership of all business data you input into the Services (sales records, inventory, customer information). You grant us a limited licence to process this data solely to provide the Services.
            </p>
            <p>
              We back up your data automatically to our cloud infrastructure. Upon account termination, you may request a data export within 30 days. After that period, we may permanently delete your data subject to any legal retention obligations.
            </p>
            <p>
              Our handling of personal data is governed by our <Link href="/legal/privacy" className="underline underline-offset-2 hover:text-[var(--color-brand-primary)]">Privacy Policy</Link>.
            </p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              {PRODUCT}, Astana Biz, MCBIZ, and all associated logos, software, content, and documentation are the intellectual property of {COMPANY} or its licensors, protected under Malaysian trademark and copyright law. Nothing in these Terms transfers any intellectual property rights to you.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable licence to use the Services during the term of your subscription, solely for your internal business purposes.
            </p>
          </Section>

          <Section title="8. Availability and Support">
            <p>
              We aim to maintain service availability of 99% uptime measured monthly, excluding scheduled maintenance. Scheduled maintenance will be communicated with at least 24 hours&apos; notice where possible.
            </p>
            <p>
              Customer support is provided via WhatsApp and email during business hours (Monday–Friday, 9am–6pm MYT). Response times are best-effort and not guaranteed under a formal SLA unless agreed separately.
            </p>
          </Section>

          <Section title="9. Disclaimer of Warranties">
            <p>
              The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement, to the fullest extent permitted by Malaysian law.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, {COMPANY} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of (or inability to use) the Services, including loss of profit, loss of data, or business interruption.
            </p>
            <p>
              Our total aggregate liability to you for any claim arising under these Terms shall not exceed the total subscription fees paid by you in the <strong>three months</strong> immediately preceding the event giving rise to the claim.
            </p>
          </Section>

          <Section title="11. Indemnification">
            <p>
              You agree to indemnify and hold harmless {COMPANY}, its directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from: (a) your use of the Services; (b) your breach of these Terms; or (c) your violation of any third-party rights.
            </p>
          </Section>

          <Section title="12. Termination">
            <p>
              Either party may terminate the service relationship at any time:
            </p>
            <ul>
              <li><strong>You</strong> may cancel your subscription by contacting us via WhatsApp or email. Cancellation takes effect at the end of the current billing period.</li>
              <li><strong>We</strong> may suspend or terminate your account immediately for breach of these Terms, non-payment, or where required by law, with written notice.</li>
            </ul>
            <p>
              Upon termination, your right to access the Services ceases. Sections 6, 7, 10, 11, and 13 survive termination.
            </p>
          </Section>

          <Section title="13. Governing Law and Dispute Resolution">
            <p>
              These Terms are governed by and construed in accordance with the laws of <strong>Malaysia</strong>. Any dispute arising from or relating to these Terms shall first be submitted to good-faith negotiation. If unresolved within 30 days, the parties submit to the exclusive jurisdiction of the courts of Malaysia.
            </p>
          </Section>

          <Section title="14. Changes to These Terms">
            <p>
              We may revise these Terms from time to time. Material changes will be notified via in-app notice or email at least 14 days before taking effect. Continued use after the effective date constitutes acceptance. If you do not agree to the revised Terms, you must stop using the Services before the effective date.
            </p>
          </Section>

          <Section title="15. Contact Us">
            <p>For questions or notices regarding these Terms:</p>
            <address className="not-italic mt-4 rounded-xl border border-[var(--color-border-hairline)] bg-[var(--color-surface-tint)] p-6 text-[0.95rem] leading-relaxed">
              <strong>{COMPANY}</strong><br />
              Registration No. {REG}<br />
              {ADDRESS}<br />
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a><br />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </address>
          </Section>

          <div className="mt-12 border-t border-[var(--color-border-hairline)] pt-8 text-[0.875rem] text-[var(--color-ink-soft)]">
            <Link href="/legal/privacy" className="underline underline-offset-2 hover:text-[var(--color-brand-primary)]">
              ← Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-[1.25rem] font-bold tracking-tight text-[var(--color-ink)]">
        {title}
      </h2>
      <div className="mt-3 text-[0.975rem] leading-[1.75] text-[var(--color-ink-soft)]">
        {children}
      </div>
    </section>
  );
}

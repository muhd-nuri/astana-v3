import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Astana POS",
  description:
    "How Astana Solutions (M) Sdn Bhd collects, uses, and protects your personal data under Malaysia's Personal Data Protection Act 2010.",
};

const COMPANY = "Astana Solutions (M) Sdn Bhd";
const REG = "202001004296 (1360616-V)";
const PRODUCT = "Astana POS";
const EMAIL = "support@astanabiz.com";
const PHONE = "+603 3396 5656";
const ADDRESS = "No 19A Jalan Astana Alam E13/E, Bandar Puncak Alam, 42300 Selangor, Malaysia";
const EFFECTIVE = "1 June 2026";

export default function PrivacyPage() {
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
            Privacy Policy
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
            {COMPANY} (Registration No. {REG}) (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates {PRODUCT} and the Astana Biz platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data in accordance with the <strong>Personal Data Protection Act 2010 (PDPA)</strong> of Malaysia.
          </p>
          <p>
            By using our products or services, you consent to the practices described in this policy.
          </p>

          <Section title="1. Personal Data We Collect">
            <p>We may collect the following categories of personal data:</p>
            <ul>
              <li><strong>Identity data</strong> — full name, MyKad/passport number (where required by law)</li>
              <li><strong>Contact data</strong> — email address, phone number, WhatsApp number, mailing address</li>
              <li><strong>Business data</strong> — business name, SSM registration number, business address, industry type</li>
              <li><strong>Account data</strong> — username, password hash, account preferences, access roles</li>
              <li><strong>Transaction data</strong> — sales records, inventory movements, payment method type (amount only; we do not store full card numbers)</li>
              <li><strong>Device &amp; usage data</strong> — IP address, browser/app type, device identifiers, pages visited, crash logs</li>
              <li><strong>Communication data</strong> — messages sent to our WhatsApp, email, or support channels</li>
            </ul>
            <p>We collect this data directly from you (registration, support enquiries), automatically (app telemetry, logs), and from third-party platforms (Google Play, app stores) where permitted.</p>
          </Section>

          <Section title="2. How We Use Your Personal Data">
            <p>We process your personal data for the following purposes:</p>
            <ul>
              <li>Providing, maintaining, and improving the {PRODUCT} software and Astana Biz services</li>
              <li>Processing subscriptions, renewals, and billing via WhatsApp or authorised resellers</li>
              <li>Sending service-related communications (account alerts, system updates, downtime notices)</li>
              <li>Responding to support requests and enquiries</li>
              <li>Sending promotional communications — only with your consent, and you may opt out at any time</li>
              <li>Complying with legal obligations under Malaysian law, including LHDN e-Invoice (MyInvois) requirements</li>
              <li>Detecting and preventing fraud, unauthorised access, and security incidents</li>
              <li>Conducting internal analytics to improve our products</li>
            </ul>
          </Section>

          <Section title="3. Legal Basis for Processing">
            <p>Under the PDPA 2010, we process your personal data on the following bases:</p>
            <ul>
              <li><strong>Consent</strong> — you have given explicit consent (e.g., subscribing to marketing)</li>
              <li><strong>Contract</strong> — processing is necessary to perform our services agreement with you</li>
              <li><strong>Legal obligation</strong> — we are required to process certain data under Malaysian law</li>
              <li><strong>Legitimate interests</strong> — improving our services and preventing fraud, where your rights are not overridden</li>
            </ul>
          </Section>

          <Section title="4. Disclosure of Personal Data">
            <p>We do not sell your personal data. We may share it with:</p>
            <ul>
              <li><strong>Service providers</strong> — cloud hosting providers, payment processors, email/SMS platforms, analytics tools — bound by confidentiality obligations</li>
              <li><strong>Authorised resellers &amp; partners</strong> — Astana Biz dealers and MCBIZ hardware partners, only as necessary to fulfil services you have requested</li>
              <li><strong>Regulatory authorities</strong> — LHDN, SSM, or other Malaysian authorities where required by law</li>
              <li><strong>Successors</strong> — in the event of a merger, acquisition, or asset sale, with notice to you</li>
            </ul>
          </Section>

          <Section title="5. Cross-Border Transfers">
            <p>
              Our cloud infrastructure may process data in servers located outside Malaysia (e.g., Singapore, US). Where such transfers occur, we ensure equivalent levels of data protection through contractual safeguards consistent with the PDPA.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Account data is retained for the duration of your subscription and up to <strong>7 years</strong> thereafter for legal and financial record-keeping purposes. You may request earlier deletion — see Section 8.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We implement industry-standard technical and organisational measures to protect your data, including encrypted data transmission (TLS), access controls, and regular security reviews. No method of transmission over the internet is 100% secure; we cannot guarantee absolute security but will notify you without undue delay in the event of a material breach affecting your data.
            </p>
          </Section>

          <Section title="8. Your Rights Under the PDPA">
            <p>As a data subject, you have the right to:</p>
            <ul>
              <li><strong>Access</strong> — request a copy of personal data we hold about you</li>
              <li><strong>Correction</strong> — request correction of inaccurate or incomplete data</li>
              <li><strong>Withdrawal of consent</strong> — withdraw consent for marketing communications at any time</li>
              <li><strong>Limit processing</strong> — request that we limit how we use your data in certain circumstances</li>
            </ul>
            <p>
              To exercise any of these rights, contact our Data Protection Officer at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or {PHONE}. We will respond within 21 days.
            </p>
          </Section>

          <Section title="9. Cookies &amp; Tracking Technologies">
            <p>
              Our website and web app use cookies and similar technologies to maintain sessions, remember preferences, and collect aggregate usage statistics. You may control cookie settings through your browser; disabling cookies may affect some features.
            </p>
            <p>
              We may use third-party analytics tools (e.g., Google Analytics, Meta Pixel) to understand how users interact with our site. These tools may set their own cookies subject to their respective privacy policies.
            </p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>
              Our services may contain links to third-party websites or platforms (e.g., Google Play Store, WhatsApp). We are not responsible for the privacy practices of those platforms and encourage you to review their policies.
            </p>
          </Section>

          <Section title="11. Children">
            <p>
              Our services are not directed at children under 18 years of age. We do not knowingly collect personal data from minors. If you believe we have collected such data, please contact us immediately.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Material changes will be notified via in-app notice or email at least 14 days before taking effect. Continued use of our services after the effective date constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              For any questions, data access requests, or complaints regarding this Privacy Policy, please contact:
            </p>
            <address className="not-italic mt-4 rounded-xl border border-[var(--color-border-hairline)] bg-[var(--color-surface-tint)] p-6 text-[0.95rem] leading-relaxed">
              <strong>{COMPANY}</strong><br />
              Registration No. {REG}<br />
              {ADDRESS}<br />
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a><br />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </address>
          </Section>

          <div className="mt-12 border-t border-[var(--color-border-hairline)] pt-8 text-[0.875rem] text-[var(--color-ink-soft)]">
            <Link href="/legal/terms" className="underline underline-offset-2 hover:text-[var(--color-brand-primary)]">
              Terms of Service →
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

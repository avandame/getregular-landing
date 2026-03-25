import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Get Regular",
  description: "How we handle and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-cream min-h-screen pt-32 pb-24 px-5 md:px-8 lg:px-12">
      <div className="max-w-[720px] mx-auto">
        <Link
          href="/"
          className="text-[11px] tracking-[0.14em] uppercase text-taupe hover:text-ink transition-colors mb-12 inline-block"
        >
          &larr; Back to Home
        </Link>

        <p className="text-[11px] tracking-[0.14em] uppercase text-taupe mb-4">
          Last update — February 12, 2026
        </p>

        <h1
          className="font-display font-light tracking-tight text-ink mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-taupe text-base mb-16">
          How we handle and protect your information.
        </p>

        <div className="space-y-12 text-ink text-[15px]">
          {/* Intro */}
          <p>
            At Get Regular Health, Inc., your privacy is important to us. This Privacy
            Policy explains how we collect, use, and protect your information
            when you use the Get Regular mobile application (&ldquo;App&rdquo;).
          </p>

          {/* Information We Collect */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Information We Collect
            </h2>

            <h3 className="font-medium text-ink mb-2">Account Information</h3>
            <p className="text-taupe mb-6">
              Email address, name, and other details you provide when creating an
              account.
            </p>

            <h3 className="font-medium text-ink mb-2">
              Health &amp; App Data (User-Generated Content)
            </h3>
            <ul className="list-disc pl-5 text-taupe space-y-2 mb-6">
              <li>
                <strong className="text-ink">Food &amp; nutrition data:</strong>{" "}
                Photos, text descriptions, identified ingredients, and
                nutritional analysis including macronutrients, micronutrients,
                and gut-specific compounds (such as fiber, polyphenols, and
                prebiotics)
              </li>
              <li>
                <strong className="text-ink">Digestive health data:</strong>{" "}
                Stool photos, Bristol Stool Scale scores, bowel movement
                frequency, and gut health scores
              </li>
              <li>
                <strong className="text-ink">Symptom data:</strong> Symptoms you
                log manually or mention in chat conversations
              </li>
              <li>
                <strong className="text-ink">
                  Medications &amp; supplements:
                </strong>{" "}
                Any medications or supplements you choose to track
              </li>
              <li>
                <strong className="text-ink">
                  Hydration &amp; lifestyle notes:
                </strong>{" "}
                Water intake and other lifestyle factors you choose to log
              </li>
              <li>
                <strong className="text-ink">Chat conversations:</strong>{" "}
                Messages you send to the AI health coach (Gut Check) and
                AI-generated responses
              </li>
              <li>
                <strong className="text-ink">Core memories:</strong> Persistent
                health facts learned from your conversations to personalize
                recommendations (e.g., confirmed food intolerances, medical
                conditions like IBS or PCOS, medications you&apos;ve mentioned)
              </li>
              <li>
                <strong className="text-ink">Experiments:</strong>{" "}
                Self-experiments suggested by the AI coach (e.g., &ldquo;try
                eliminating dairy for a week&rdquo;), including protocols and
                daily tracking data
              </li>
            </ul>

            <h3 className="font-medium text-ink mb-2">Photos</h3>
            <p className="text-taupe mb-6">
              If you upload stool or food photos for analysis, these images are
              compressed and sent to OpenAI for AI-powered analysis. Photos are
              not permanently stored on our servers — only the analysis results
              are saved. You may log entries manually if you prefer not to upload
              images.
            </p>

            <h3 className="font-medium text-ink mb-2">
              Device &amp; Usage Data
            </h3>
            <p className="text-taupe mb-6">
              Device type, operating system, app version, IP address (for rate
              limiting and security), and general usage statistics to understand
              how you interact with the App.
            </p>

            <h3 className="font-medium text-ink mb-2">Communications Data</h3>
            <p className="text-taupe">
              If you join our mailing list, we collect your email to send
              updates or announcements.
            </p>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              How We Use Information
            </h2>
            <p className="text-taupe mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-5 text-taupe space-y-2 mb-6">
              <li>
                Provide personalized insights and calculate your daily Gut
                Health Score (based on your past 7 days of entries, weighted
                toward the most recent data)
              </li>
              <li>
                Generate AI-powered nutrition analysis for food entries
              </li>
              <li>
                Analyze stool entries using the Bristol Stool Scale for
                digestive health scoring
              </li>
              <li>
                Provide personalized AI coaching via the Gut Check chat feature
              </li>
              <li>
                Build and maintain &ldquo;core memories&rdquo; — persistent
                health facts that improve the accuracy of your recommendations
                over time
              </li>
              <li>
                Track and suggest self-experiments to help identify food
                triggers
              </li>
              <li>
                Generate weekly digest insights by analyzing patterns across
                your food, stool, and symptom history
              </li>
              <li>
                Improve the functionality, performance, and security of the App
              </li>
              <li>
                Communicate with you about updates, features, or support
              </li>
            </ul>
            <p className="text-taupe font-medium">
              We do not sell, rent, or share your personal or health information
              with advertisers.
            </p>
          </section>

          {/* AI Powered Analysis */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              AI Powered Analysis
            </h2>
            <p className="text-taupe mb-4">
              Your food photos, stool photos, text descriptions, symptoms,
              medications, supplements, dietary preferences, and chat messages
              are sent to OpenAI&apos;s API for analysis. This includes
              generating nutrition breakdowns, stool health scores, your Gut
              Health Score, and personalized coaching responses.
            </p>
            <p className="text-taupe">
              <strong className="text-ink">Important:</strong> Only anonymized
              content is sent for processing — no names, emails, or account
              identifiers are included. OpenAI processes this data under their
              API Data Usage Policy and does not use API inputs to train their
              models.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Data Security and Third-Party Services
            </h2>
            <p className="text-taupe mb-4">
              We use industry-standard security measures to protect your data,
              including:
            </p>
            <ul className="list-disc pl-5 text-taupe space-y-2 mb-8">
              <li>Encryption in transit (HTTPS/TLS)</li>
              <li>
                Encryption at rest (provided by our database provider)
              </li>
              <li>
                Row-level security policies to restrict access to health data
              </li>
              <li>JWT-based authentication via Supabase</li>
              <li>
                Rate limiting (based on IP address) to prevent abuse
              </li>
            </ul>

            <h3 className="font-medium text-ink mb-3">
              Third-Party Service Providers
            </h3>
            <p className="text-taupe mb-4">
              We use industry-standard security measures, including encryption
              in transit (HTTPS/TLS) and encryption at rest, to protect your
              data. All health data is restricted through row-level security
              policies, and all third-party providers are contractually bound to
              maintain equivalent protections.
            </p>
            <p className="text-taupe mb-3">
              We rely on trusted third parties to operate the App and website,
              including:
            </p>

            <h4 className="font-medium text-ink text-sm mb-2">For the App:</h4>
            <ul className="list-disc pl-5 text-taupe space-y-2 mb-6">
              <li>
                <strong className="text-ink">Supabase</strong> (authentication,
                database, storage)
              </li>
              <li>
                <strong className="text-ink">OpenAI</strong> (AI-powered
                analysis of photos and health inputs — only anonymized content
                is sent for processing, with no names, emails, or account
                identifiers; data is not used to train their models)
              </li>
              <li>
                <strong className="text-ink">Apple</strong> (payment processing
                for subscriptions via the App Store)
              </li>
              <li>
                <strong className="text-ink">Sentry</strong> (error and crash
                reporting to help us identify and fix technical issues — may
                include device type and app state at time of error, but no
                health data)
              </li>
              <li>
                <strong className="text-ink">PostHog</strong> (usage analytics
                to understand how users interact with the App — does not include
                health data content and data is not shared with advertising
                networks)
              </li>
            </ul>

            <h4 className="font-medium text-ink text-sm mb-2">
              For the website and marketing:
            </h4>
            <ul className="list-disc pl-5 text-taupe space-y-2">
              <li>
                <strong className="text-ink">Meta/Facebook</strong> (advertising
                pixel on our marketing website to measure ad performance — not
                present in the App and does not track health data)
              </li>
              <li>
                <strong className="text-ink">Mailchimp</strong> (email marketing
                and mailing list management)
              </li>
              <li>
                <strong className="text-ink">Kit</strong> (email marketing)
              </li>
              <li>
                <strong className="text-ink">Modash</strong> (influencer
                marketing outreach)
              </li>
              <li>
                <strong className="text-ink">Instantly.ai</strong> (email
                outreach)
              </li>
              <li>
                <strong className="text-ink">ManyChat</strong> (automated
                messaging on Instagram to respond to inquiries and collect
                contact information for interested users)
              </li>
            </ul>
            <p className="text-taupe mt-4">
              These providers act on our behalf and are contractually bound to
              protect your data.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Data Retention and Your Rights
            </h2>
            <p className="text-taupe mb-4">
              We retain your account, health data, and uploaded photos only as
              long as necessary to provide the App.
            </p>
            <p className="text-taupe mb-6">
              You may delete your account and all associated data, including
              photos, directly within the App at any time. You may also request
              deletion by contacting{" "}
              <a
                href="mailto:hello@getregular.com"
                className="text-accent-dark hover:text-ink transition-colors"
              >
                hello@getregular.com
              </a>
              . Upon deletion, your data is permanently removed from our systems
              within 30 days, including from active databases and file storage.
            </p>
            <p className="text-taupe mb-3">
              Depending on your location, you may have additional rights under
              applicable privacy laws:
            </p>
            <ul className="list-disc pl-5 text-taupe space-y-2 mb-4">
              <li>
                <strong className="text-ink">California (CCPA/CPRA):</strong>{" "}
                You have the right to know what personal information we collect,
                request its deletion, and opt out of the sale of your data. We
                do not sell your personal information.
              </li>
              <li>
                <strong className="text-ink">
                  Washington (My Health My Data Act):
                </strong>{" "}
                You have the right to consent to the collection of health data,
                request deletion, and withdraw consent at any time.
              </li>
              <li>
                <strong className="text-ink">
                  European Union (GDPR):
                </strong>{" "}
                You have the right to access, correct, or delete your data,
                withdraw consent to processing, and request a copy of your
                stored information.
              </li>
            </ul>
            <p className="text-taupe">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:hello@getregular.com"
                className="text-accent-dark hover:text-ink transition-colors"
              >
                hello@getregular.com
              </a>{" "}
              or use the account deletion feature within the App.
            </p>
          </section>

          {/* Data Breach */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Data Breach Notification
            </h2>
            <p className="text-taupe">
              In the unlikely event of a data breach affecting your personal or
              health information, we will notify affected users within 60 days
              of discovery, as required by applicable law. If a breach affects
              500 or more individuals, we will also notify the Federal Trade
              Commission and, where required, the media.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Children&apos;s Privacy
            </h2>
            <p className="text-taupe">
              The App is not intended for children under 13. We do not knowingly
              collect data from children under 13. If we learn we have, we will
              delete it promptly.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              International Transfers and Policy Updates
            </h2>
            <p className="text-taupe mb-4">
              If you are located outside the United States, your information may
              be transferred to and stored in the U.S. By using the App, you
              consent to this transfer. Our service providers maintain
              appropriate safeguards to protect your data in accordance with
              this Privacy Policy.
            </p>
            <p className="text-taupe">
              We may update this Privacy Policy from time to time. Any changes
              will be posted in the App and on our website with an updated
              effective date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">Contact Us</h2>
            <p className="text-taupe mb-2">
              If you have questions about this Privacy Policy or how we handle
              your information, contact us at:
            </p>
            <p className="text-ink font-medium">Get Regular Health, Inc.</p>
            <p className="text-taupe">
              Email:{" "}
              <a
                href="mailto:hello@getregular.com"
                className="text-accent-dark hover:text-ink transition-colors"
              >
                hello@getregular.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

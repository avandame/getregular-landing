import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Get Regular",
  description: "Get Regular Terms of Service.",
};

export default function TermsOfService() {
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
          Last update — July 10, 2025
        </p>

        <h1
          className="font-display font-light tracking-tight text-ink mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Terms of Service
        </h1>
        <p className="text-taupe text-base mb-16">
          Get Regular Terms of Service
        </p>

        <div className="space-y-12 text-ink text-[15px]">
          {/* Intro */}
          <p className="text-taupe">
            Welcome to Get Regular (&ldquo;App&rdquo;), operated by Get Regular
            Health, Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
            &ldquo;us&rdquo;). By downloading or using the App, you agree to
            these Terms of Service (&ldquo;Terms&rdquo;). Please read them
            carefully.
          </p>

          {/* Use of the App */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Use of the App
            </h2>
            <ul className="list-disc pl-5 text-taupe space-y-2">
              <li>
                The App is provided for personal, non-commercial use only.
              </li>
              <li>
                You agree to use the App in compliance with applicable laws and
                regulations.
              </li>
              <li>You must be at least 13 years old to use the App.</li>
            </ul>
          </section>

          {/* Health Disclaimer */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Health Disclaimer
            </h2>
            <ul className="list-disc pl-5 text-taupe space-y-2">
              <li>
                The App provides wellness insights only. It is not medical
                advice and is not a substitute for professional healthcare.
              </li>
              <li>
                Always consult a qualified healthcare provider before making
                medical decisions.
              </li>
              <li>
                Do not use the App in emergencies. If you think you may have a
                medical emergency, call your doctor or 911 immediately.
              </li>
            </ul>
          </section>

          {/* User Accounts and Data */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              User Accounts and Data
            </h2>
            <p className="text-taupe mb-4">
              You are responsible for keeping your account credentials secure.
            </p>
            <p className="text-taupe mb-4">
              You may provide health-related information (such as stool photos,
              symptoms, and food logs). You retain ownership of this data, but
              you grant us a license to use it solely to operate and improve the
              App.
            </p>
            <p className="text-taupe">
              For details on how we handle your data, please see our{" "}
              <Link
                href="/legal/privacy-policy"
                className="text-accent-dark hover:text-ink transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          {/* Subscription and Payments */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Subscription and Payments
            </h2>
            <ul className="list-disc pl-5 text-taupe space-y-2">
              <li>
                Certain features of the App may require a subscription or
                in-app purchase. Pricing and terms will be displayed in the App.
              </li>
              <li>
                Payments are processed through Apple&apos;s App Store and are
                subject to their policies.
              </li>
            </ul>
          </section>

          {/* Prohibited Conduct */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Prohibited Conduct
            </h2>
            <p className="text-taupe mb-4">You agree not to:</p>
            <ul className="list-disc pl-5 text-taupe space-y-2">
              <li>
                Misuse the App or attempt to disrupt its operation.
              </li>
              <li>Upload harmful, offensive, or unlawful content.</li>
              <li>Use the App to harass or harm others.</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Termination
            </h2>
            <p className="text-taupe">
              We may suspend or terminate your access to the App if you violate
              these Terms or misuse the service.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Intellectual Property
            </h2>
            <p className="text-taupe">
              The App and its content (excluding user-generated content) are
              owned by Get Regular Health, Inc. and protected by intellectual
              property laws. You may not copy, modify, or distribute the App
              without our permission.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">
              Disclaimer of Warranties and Limitation of Liability
            </h2>
            <p className="text-taupe mb-4">
              The App is provided &ldquo;as is&rdquo; without warranties of any
              kind. We do not guarantee that the App will be error-free,
              uninterrupted, or meet your expectations.
            </p>
            <p className="text-taupe">
              To the fullest extent permitted by law, Get Regular Health, Inc.
              is not liable for any damages arising from your use of the App,
              including health decisions you make based on the insights provided.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-2xl text-ink mb-6">Contact Us</h2>
            <p className="text-taupe mb-2">
              If you have questions about these Terms, contact us at:
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

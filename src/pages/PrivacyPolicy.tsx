import HerosectionComponent from "@/components/shared/HerosectionComponent";
import { Helmet } from "react-helmet-async";

function PrivacyPolicy() {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Leyrand</title>
        <meta
          name="description"
          content="Welcome to our law firm's homepage."
        />
        <meta property="og:title" content="Home | Leyrand" />
      </Helmet>
      <HerosectionComponent
        title="Privacy Policy"
        image="/blogs.jpeg"
        subtitle=""
      />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* <div className="text-center mb-10 flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-bold  text-primary">
              The  legal partner for you and your business
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              We provide expert guidance across diverse practice areas,
              including project finance, banking and finance, corporate and
              commercial law, real estate, dispute resolution, employment and
              labor law, Data protection and intellectual property, immigration,
              mining, tax, environmental and climate change law.
            </p>
          </div> */}
          <div>
            <section className="text-start">
              <p className="mb-4">
                At <strong>Leyrand</strong>, we value your privacy and are
                committed to protecting the personal information you share with
                us. This Privacy Policy explains how we collect, use, and
                safeguard your data when you interact with our website and
                services.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect personal information including, but not limited
                to, your name, email address, phone number, company name, and
                any other details you provide through our contact forms or
                communication channels.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                The information we collect is used to:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Respond to your inquiries and provide legal services.</li>
                  <li>Improve our website and user experience.</li>
                  <li>
                    Send updates, newsletters, or legal insights (only if you
                    opt in).
                  </li>
                  <li>Ensure compliance with legal obligations.</li>
                </ul>
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                3. Sharing of Information
              </h2>
              <p className="mb-4">
                We do not sell, rent, or trade your personal data. We may share
                your information with trusted third parties solely to support
                our service delivery, legal obligations, or when required by
                law.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                4. Data Security
              </h2>
              <p className="mb-4">
                We implement industry-standard security measures to protect your
                personal data from unauthorized access, disclosure, or misuse.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                5. Your Rights
              </h2>
              <p className="mb-4">
                You have the right to access, correct, or delete your personal
                data held by us. You may also withdraw consent to data
                processing at any time, subject to legal and contractual
                restrictions.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                6. Cookies
              </h2>
              <p className="mb-4">
                Our website may use cookies to enhance your browsing experience.
                You can choose to disable cookies through your browser settings.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                7. Changes to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically. We encourage you
                to review it regularly to stay informed about how we are
                protecting your data.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                8. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or your data, please contact us at:
                <br />
                <span className="font-medium text-gray-900">
                  info@leyrand.org
                </span>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;

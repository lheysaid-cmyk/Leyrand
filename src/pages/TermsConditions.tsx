import HerosectionComponent from "@/components/shared/HerosectionComponent";
import { Helmet } from "react-helmet-async";

function TermsConditions() {
  return (
    <div>
      <Helmet>
        <title>Terms and Conditions | Leyrand</title>
        <meta
          name="description"
          content="Welcome to our law firm's homepage."
        />
        <meta property="og:title" content="Home | Leyrand" />
      </Helmet>
      <HerosectionComponent
        title="Terms and Conditions"
        image="/blogs.jpeg"
        subtitle=""
      />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div>
            <section className="text-start">
              {/* <h1 className="text-3xl font-bold text-red-600 mb-6">
                Terms and Conditions
              </h1> */}

              <p className="mb-4">
                Welcome to <strong>Leyrand</strong>. By accessing or using our
                website, you agree to be bound by the following Terms and
                Conditions. If you do not agree with any part of these terms,
                please do not use our website.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                1. Use of Website
              </h2>
              <p className="mb-4">
                This website is intended to provide general information about
                Leyrand and does not constitute legal advice. Use of this
                website does not establish an attorney-client relationship.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                2. Intellectual Property
              </h2>
              <p className="mb-4">
                All content on this website, including text, graphics, logos,
                and images, is the property of Leyrand or its licensors and is
                protected by applicable copyright, trademark, and other
                intellectual property laws. Unauthorized use is prohibited.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                3. No Legal Advice
              </h2>
              <p className="mb-4">
                The information on this site is for general informational
                purposes only and is not intended as legal advice. Please
                consult with a qualified attorney for advice regarding your
                individual situation.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                4. Limitation of Liability
              </h2>
              <p className="mb-4">
                While we strive to keep the information on this website accurate
                and up to date, Leyrand makes no warranties or representations
                regarding the accuracy or completeness of any content. We shall
                not be liable for any damages resulting from your use or
                inability to use the site.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                5. External Links
              </h2>
              <p className="mb-4">
                This website may contain links to third-party websites. Leyrand
                is not responsible for the content, accuracy, or privacy
                practices of those sites and does not endorse them.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                6. Changes to Terms
              </h2>
              <p className="mb-4">
                We reserve the right to modify these Terms and Conditions at any
                time without notice. Continued use of the site constitutes your
                acceptance of any revised terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                7. Governing Law
              </h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance
                with the laws of the United Republic of Tanzania. Any disputes
                shall be subject to the exclusive jurisdiction of Tanzanian
                courts.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
                8. Contact
              </h2>
              <p>
                If you have any questions regarding these Terms and Conditions,
                please contact us at:
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

export default TermsConditions;

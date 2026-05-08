import WhatsappButton from "../WhatsappButton";

interface FooterWidgetProps {
  title: string;
  links: { name: string; url: string }[];
}

function Footer({ title, links }: FooterWidgetProps) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-3">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
function FooterWidget() {
  return (
    <footer className="bg-primary text-white py-10">
      <WhatsappButton />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="grid gap-3">
          <img src="/logo-white.svg" alt="" />
          <p className="text-sm text-start">
            Empowering clients with innovative, reliable, and globally aligned
            legal solutions grounded in integrity and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <Footer
          title="Quick Links"
          links={[
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about-us" },
            { name: "Contact", url: "https://calendly.com/rajabumrisho69/" },
          ]}
        />
        {/* Support */}
        <Footer
          title="Services"
          links={[
            { name: "Our Experties", url: "/get-services" },
            { name: "Works With us", url: "/careers" },
            { name: "Insights & Updates", url: "/insights" },
          ]}
        />
        {/* Social Media */}
        <Footer
          title="Follow Us"
          links={[
            {
              name: "Facebook",
              url: "https://web.facebook.com/profile.php?id=61579773290546",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/leyra_nd2025/",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/@LeyrandLawFirm",
            },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/",
            },
            {
              name: "X",
              url: "https://x.com/",
            },
            {
              name: "TikTok",
              url: "https://www.tiktok.com/@leyrandlawfirm?lang=en-GB",
            },
          ]}
        />
      </div>
      <div className="border-t-[0.1px] border-white/50 mt-6">
        <p className="text-center text-gray-300 mt-6 text-sm">
          © {new Date().getFullYear()} Leyrand. All rights reserved.
        </p>
        <div className="flex flex-row gap-4 items-center justify-center mt-4">
          <a href="/privacy-policy" className="text-sm underline">
            Privacy Policy
          </a>
          <a href="/terms-and-conditions" className="text-sm underline">
            Terms & Conditions
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-100">
        Designed & Developed by{" "}
        <a
          href="https://minfoxy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Minfoxy Technology Company
        </a>
      </div>
    </footer>
  );
}

export default FooterWidget;

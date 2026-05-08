import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

var serviceData = [
  {
    title: "Banking and Finance",
    category: "Strategic legal support for complex financial structures.",
    content:
      "We offer deep expertise in banking law, capital markets, fintech, asset management, and financial services regulation. Our services include regulatory compliance, licensing, loan agreements, AML/KYC advisory, and distressed debt restructuring.",
    src: "/services/Banking and Finance.jpg",
  },
  {
    title: "Competition Law",
    category: "Protecting market fairness through informed legal action.",
    content:
      "Our team handles merger control, abuse of dominance investigations, dawn raids, and competition compliance. We also advise on consumer protection, market inquiries, and exemption applications to support competitive business practices.",
    src: "/services/Competition Law.jpg",
  },
  {
    title: "Project Finance",
    category:
      "Comprehensive legal counsel for large-scale infrastructure financing.",
    content:
      "From structuring SPVs to drafting key project documents, we guide clients through legal due diligence, security agreements, EPC contracts, project bonds, refinancing, and more.",
    src: "/services/proj-finance.png",
  },
  {
    title: "Corporate and Commercial Law",
    category: "Shaping resilient businesses with sound legal foundations.",
    content:
      "We advise on mergers & acquisitions, business restructuring, commercial contracts, due diligence, company law, governance, and regulatory compliance. Our team supports both startups and established enterprises.",
    src: "/services/corporate.jpeg",
  },
  {
    title: "Employment and Labor Law",
    category: "Navigating workplace laws to ensure compliance and fairness.",
    content:
      "Our labor practice includes employment litigation, collective bargaining, OSHA compliance, executive terminations, disciplinary hearings, and regulatory advisory across various sectors and jurisdictions.",
    src: "/services/Employment and Labor Law.jpg",
  },
  {
    title: "Trust and Estate Law",
    category: "Protecting legacies through thoughtful legal planning.",
    content:
      "We assist with wills, estate planning, probate, administration, and trust structuring, ensuring smooth succession and legal security for families and businesses alike.",
    src: "/services/Trust and Estate Law.png",
  },
  {
    title: "Tax and Exchange Control",
    category: "Advising on local and cross-border tax compliance.",
    content:
      "We offer guidance on corporate tax, VAT, transfer pricing, customs, exchange control regulations, and dispute resolution before tax authorities and tribunals.",
    src: "/services/Tax and Exchange Control.jpg",
  },
  {
    title: "Real Estate Law",
    category:
      "Reliable legal solutions for property transactions and disputes.",
    content:
      "We handle sales, land due diligence, leasing, land use regulations, mortgage financing, and landlord-tenant matters with deep expertise in Tanzanian land law.",
    src: "/blogs.jpeg",
  },
  {
    title: "Environment and Climate Law",
    category: "Legal insight into sustainable and climate-conscious practices.",
    content:
      "Our services include ESG compliance, carbon markets, environmental impact assessments, international environmental law, and multilateral agreement advisory.",
    src: "/services/Environment and Climate Law.png",
  },
  {
    title: "Data Protection and IP",
    category: "Guarding data integrity and protecting innovations.",
    content:
      "We provide data privacy audits, regulatory representation, licensing, policy drafting, and IP protection services including trademarks and copyrights.",
    src: "/services/ip.jpeg",
  },
  {
    title: "Mining and Natural Resources",
    category: "Expert legal counsel in extractives and resource law.",
    content:
      "Our mining team covers licensing, tax, community rights, ESG compliance, and transactions related to mergers, acquisitions, and exploration activities across Africa.",
    src: "/services/Mining and Natural Resources.jpg",
  },
  {
    title: "Immigration Law",
    category: "Facilitating seamless movement for professionals and investors.",
    content:
      "We assist with work and residence permits, visas, refugee law, business immigration, and permanent residency for individuals and corporate clients.",
    src: "/services/Immigration Law.jpg",
  },
  {
    title: "Shipping, Ports and Logistics",
    category: "Legal expertise in maritime operations and trade logistics.",
    content:
      "We advise on ship sales, charterparty disputes, environmental compliance, port law, bill of lading issues, and maritime regulatory frameworks.",
    src: "/services/Shipping, Ports and Logistics.png",
  },
];

// const data = [
//   {
//     category: "Artificial Intelligence",
//     category: "You can do more with AI.",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     category: "Enhance your productivity.",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     category: "Launching the new Apple Vision Pro.",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     category: "Maps for your iPhone 15 Pro Max.",
//     src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     category: "Photography just got better.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     category: "Hiring for a Staff Software Engineer",
//     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
// ];

function OurServices() {
  const cards = serviceData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto">
        <div className="w-full text-start flex flex-col gap-4">
          <div className="text-xl md:text-5xl font-bold text-primary dark:text-neutral-200 font-sans">
            Our Practice Areas.
          </div>
          <p className="text-lg text-muted-foreground">
            Our team of experienced legal professionals offers a full range of
            legal services to meet your diverse needs. Whether you require
            assistance with mergers and acquisitions, litigation, or real estate
            matters, we have the expertise to provide effective legal solutions.
          </p>
        </div>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default OurServices;

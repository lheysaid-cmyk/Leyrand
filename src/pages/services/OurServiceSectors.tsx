import { cn } from "@/lib/utils";

function OurServiceSectors() {
  var sectors = [
    {
      title: "Project and Infrastructure Development",
      description:
        "Legal advisory across the lifecycle of large-scale public and private infrastructure projects, from structuring and finance to regulatory compliance and dispute resolution.",
      suggested_image: "/sectors/Project and Infrastructure Development.png",
    },
    {
      title: "Commercial Real Estate",
      description:
        "Expert legal support in property acquisitions, leasing, financing, land use, zoning, and compliance for commercial developments and investors.",
      suggested_image: "/sectors/Commercial Real Estate.png",
    },
    {
      title: "Construction and Engineering",
      description:
        "Strategic legal counsel on contracts, risk management, project finance, and dispute resolution within the construction and engineering sectors.",
      suggested_image: "/sectors/Construction and Engineering.png",
    },
    {
      title: "Consumer Goods, Services and Retail",
      description:
        "Comprehensive legal services for manufacturers, distributors, and retailers covering commercial transactions, IP, compliance, and consumer protection.",
      suggested_image: "/sectors/Consumer Goods, Services and Retail.png",
    },
    {
      title: "Corporate Debt, Refinancing and Turnaround",
      description:
        "Advising businesses on debt restructuring, insolvency, turnaround strategies, and compliance to achieve financial recovery and stability.",
      suggested_image:
        "/sectors/Corporate Debt, Refinancing and Turnaround.jpg",
    },
    {
      title: "Oil & Gas",
      description:
        "Legal support across upstream, midstream, and downstream operations, including licensing, environmental compliance, joint ventures, and local content laws.",
      suggested_image: "/sectors/Oil & Gas.jpg",
    },
    {
      title: "Technology and Communication",
      description:
        "Specialized legal advisory on data protection, cybersecurity, fintech, telecommunications regulations, and innovation-driven transactions.",
      suggested_image: "/sectors/Technology and Communication.jpg",
    },
    {
      title: "Mining",
      description:
        "Legal expertise in exploration licensing, compliance, community relations, taxation, and ESG within Tanzania and cross-border jurisdictions.",
      suggested_image: "/sectors/Mining.png",
    },
    {
      title: "Aviation",
      description:
        "Legal advisory for airlines, regulators, and service providers on licensing, safety compliance, aircraft finance, and international aviation law.",
      suggested_image: "/sectors/Aviation.jpg",
    },
    {
      title: "Hotel and Leisure",
      description:
        "Supporting hotel chains and leisure operators with property law, franchising, regulatory issues, and operational agreements.",
      suggested_image: "/sectors/Hotel and Leisure.jpg",
    },
    {
      title: "Tourism",
      description:
        "Legal advisory for tourism ventures including investment structuring, land acquisition, environmental compliance, and licensing.",
      suggested_image: "/sectors/Tourism.jpg",
    },
    {
      title: "Fintech",
      description:
        "Innovative legal solutions for startups and financial technology firms involving licensing, AML/KYC compliance, data privacy, and digital payments.",
      suggested_image: "/sectors/Fintech.jpg",
    },
    {
      title: "Shipping Port and Logistics",
      description:
        "Legal services covering shipping operations, logistics agreements, port regulations, environmental compliance, and maritime disputes.",
      suggested_image: "/sectors/Shipping Port and Logistics.jpg",
    },
    {
      title: "Health Care and Pharmaceuticals",
      description:
        "Guidance on health regulations, licensing, intellectual property, compliance with drug laws, and public-private partnerships in healthcare.",
      suggested_image: "/sectors/Health Care and Pharmaceuticals.jpg",
    },
    {
      title: "Banks and Financial Institutions",
      description:
        "Legal counsel for banks, MFIs, and investment firms on compliance, financial product structuring, M&A, and regulatory frameworks.",
      suggested_image: "/services/banks.jpeg",
    },
  ];

  return (
    <div id="our-sectors">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-bold  text-primary">
              Our Sector Area
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">
              At Leyrand, we understand that each industry faces unique
              challenges and operates within specific regulatory frameworks. Our
              legal strategies are tailored to meet the distinct demands of each
              sector we serve, ensuring our clients benefit from proactive,
              informed, and results-oriented advice. From emerging technologies
              to traditional industries, we provide trusted legal counsel that
              aligns with both local realities and global expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {sectors.map((item, index) => {
              return (
                <div className="flex flex-col gap-4" key={index}>
                  <div className="aspect-square">
                    <img
                      className={cn("h-full w-full transition duration-300")}
                      //   onLoad={() => setLoading(false)}
                      src={item.suggested_image}
                      loading="lazy"
                      decoding="async"
                      alt={"Background of a beautiful view"}
                    />
                  </div>
                  <div className="font-semibold text-xl text-primary">
                    {item.title}
                  </div>
                  <p className="text-base  text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServiceSectors;

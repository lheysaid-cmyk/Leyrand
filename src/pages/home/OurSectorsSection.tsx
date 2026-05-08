import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/sectors-carousel";
import { MoveRight } from "lucide-react";

function OurSectorsSection() {
  var sectors = [
    {
      title: "Project and Infrastructure Development",
      description:
        "Legal advisory across the lifecycle of large-scale public and private infrastructure projects, from structuring and finance to regulatory compliance and dispute resolution.",
      src: "/sectors/Project and Infrastructure Development.png",
    },
    {
      title: "Commercial Real Estate",
      description:
        "Expert legal support in property acquisitions, leasing, financing, land use, zoning, and compliance for commercial developments and investors.",
      src: "/sectors/Commercial Real Estate.png",
    },
    {
      title: "Construction and Engineering",
      description:
        "Strategic legal counsel on contracts, risk management, project finance, and dispute resolution within the construction and engineering sectors.",
      src: "/sectors/Construction and Engineering.png",
    },
    {
      title: "Consumer Goods, Services and Retail",
      description:
        "Comprehensive legal services for manufacturers, distributors, and retailers covering commercial transactions, IP, compliance, and consumer protection.",
      src: "/sectors/Consumer Goods, Services and Retail.png",
    },
    {
      title: "Corporate Debt, Refinancing and Turnaround",
      description:
        "Advising businesses on debt restructuring, insolvency, turnaround strategies, and compliance to achieve financial recovery and stability.",
      src: "/sectors/Corporate Debt, Refinancing and Turnaround.jpg",
    },
    {
      title: "Oil & Gas",
      description:
        "Legal support across upstream, midstream, and downstream operations, including licensing, environmental compliance, joint ventures, and local content laws.",
      src: "/sectors/Oil & Gas.jpg",
    },
  ];

  return (
    <div>
      <section className="py-16">
        <div className="">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 flex flex-col gap-6">
              <h2 className="text-3xl md:text-5xl font-bold  text-primary">
                Our Sector Area
              </h2>
              <p className="text-muted-foreground mt-2 text-lg">
                At Leyrand, we understand that each industry faces unique
                challenges and operates within specific regulatory frameworks.
                Our legal Service are tailored to meet the distinct demands of
                each sector we serve, ensuring our clients benefit from
                proactive, informed, and results-oriented advice. From emerging
                technologies to traditional industries, we provide trusted legal
                counsel that aligns with both local realities and global
                expectations.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={sectors} />
          </div>
          <div className="mt-8">
            <Button asChild className="cursor-pointer rounded-none">
              <a
                href="/our-services"
                className="px-6 py-3 text-lg font-semibold flex items-center gap-2"
              >
                View all sectors <MoveRight size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurSectorsSection;

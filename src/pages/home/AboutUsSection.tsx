import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

function AboutUsSection() {
  return (
    <div>
      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title Row */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              About Leyrand
            </h2>
            <p className="mt-2 text-lg md:text-xl text-white">
              Get to know more about us
            </p>
          </motion.div>

          {/* Content Row - Image & Text */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[400px] overflow-hidden"
            >
              <img
                src={"/img/hikerport-Df7s58si_mM-unsplash-min.jpg"}
                alt="How We Work"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Steps */}
              <div className="space-y-6 flex flex-col items-start">
                <p className="text-lg text-white text-start">
                  Leyrand is a top, dynamic, and agile, law firm in Tanzania,
                  redefining legal excellence through innovative,
                  client-centered solutions. We combine Tanzania's legal system
                  insight with global standards to deliver tailored,
                  results-driven legal services to individuals, businesses,
                  multinationals, startups, entrepreneurs, companies,
                  organizations and government institutions.
                </p>
                {/* <p className="text-lg text-white text-start">
                  We ensure that each person collaborates to solve his or her
                  own challenging situation. Our staff assumes our client is the
                  expert, and provides guidance.
                </p> */}
                <p className="text-lg text-white text-start">
                  At Leyrand, we believe in building lasting relationships based
                  on trust, transparency, and results. Whether you are a startup
                  seeking to establish a strong legal foundation, a
                  multinational navigating cross-border regulations, or an
                  individual addressing personal legal matters, Leyrand Law Firm
                  is your partner in achieving clarity, confidence, and success
                  in the legal arena.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-white hover:bg-white cursor-pointer text-primary hover:text-primary rounded-none"
                >
                  <a
                    href="/about-us"
                    className="px-6 py-3 text-lg font-semibold flex items-center gap-2"
                  >
                    Learn more about us <MoveRight size={20} />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsSection;

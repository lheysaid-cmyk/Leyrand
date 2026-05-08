import { motion } from "framer-motion";

function OurMissionSection() {
  return (
    <div>
      <section className="relative w-full bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/values.jpeg')] bg-cover bg-center opacity-40"></div>

        {/* Content Wrapper */}
        <div className="relative flex flex-col items-center text-center px-6 md:px-12 py-20 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-3xl"
          >
            At Leyrand, our core values center on integrity, client-focused
            service, and legal excellence. We are driven by a commitment to
            innovation, ethical practice, and delivering tailored solutions that
            empower our clients to navigate complex legal challenges with
            confidence.
            {/* With a collaborative spirit and a deep respect for
            diversity and inclusion, we strive to make a lasting impact through
            forward-thinking legal strategies rooted in professionalism,
            precision, and trust. */}
          </motion.p>

          {/* Card Section */}
          {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {missionPoints.map((item, index) => (
              <Card
                  key={index}
                  className="bg-white text-gray-900 shadow-md"
              >
                  <CardContent className="p-6">
                      <div className="text-primary text-4xl">
                          {item.icon}
                      </div>
                      <h3 className="mt-4 text-xl font-semibold">
                          {item.title}
                      </h3>
                      <p className="mt-2 text-gray-700 text-sm">
                          {item.description}
                      </p>
                  </CardContent>
              </Card>
          ))}
      </div> */}
        </div>
      </section>
    </div>
  );
}

export default OurMissionSection;

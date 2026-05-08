function AboutHeroSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold  text-primary">
            The legal partner for you and your business
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            We provide expert guidance across diverse practice areas, including
            project finance, banking and finance, corporate and commercial law,
            real estate, dispute resolution, employment and labor law, Data
            protection and intellectual property, immigration, mining, tax,
            environmental, climate change law etc.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
          {/* <div className="">
            {" "}
            <img
              className={cn(
                "h-full w-full transition duration-300 hover:opacity-80"
              )}
              src={"/about.jpg"}
              loading="lazy"
              decoding="async"
              alt={"Background of a beautiful view"}
            />
          </div> */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <p className="text-start mt-2 text-lg text-muted-foreground">
              Leyrand is a top, dynamic, and agile, law firm in Tanzania,
              redefining legal excellence through innovative, client-centered
              solutions. We combine Tanzania's legal system insight with global
              standards to deliver tailored, results-driven legal services to
              individuals, businesses, multinationals, startups, entrepreneurs,
              companies, organizations and government institutions.
            </p>
            <p className="text-start mt-2 text-lg text-muted-foreground">
              Rooted in integrity and driven by a commitment to client
              satisfaction, Leyrand blends innovative legal thinking with a deep
              understanding of both local and global frameworks. We are your
              trusted partner, ensuring your unique needs are met with
              cutting-edge service and unparalleled expertise. Our innovative
              approach to legal problems and regulatory challenges empowers us
              to stay ahead and provide proactive advice that drives success.
            </p>
            <p className="text-start mt-2 text-lg text-muted-foreground">
              At Leyrand, we believe in building lasting relationships based on
              trust, transparency, and results.
              {/* Whether you are a startup
              seeking to establish a strong legal foundation, a multinational
              navigating cross-border regulations, or an individual addressing
              personal legal matters, Leyrand Law Firm is your partner in
              achieving clarity, confidence, and success in the legal arena. */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;

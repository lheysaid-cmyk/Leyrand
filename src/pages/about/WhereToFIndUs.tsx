function WhereToFIndUs() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="text-center mb-10 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold  text-primary">
            Where To Find Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p>
                Victoria, Dar es Salaam
                <br />
                Tanzania
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p>
                <a
                  href="mailto:info@leyrand.org"
                  className="text-primary underline"
                >
                  info@leyrand.org
                </a>
              </p>
              {/* <p>
                <a
                  href="mailto:support@minfoxy.com"
                  className="text-primary underline"
                >
                  support@minfoxy.com
                </a>
              </p> */}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p>
                <a href="tel:+255786701586" className="text-primary underline">
                  +255786701586
                </a>
              </p>
            </div>
          </div>
          {/* <p className="text-muted-foreground mt-2 text-lg">
          </p> */}
        </div>
      </div>
      <div className="relative w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=Victoria+Dar+es+salaam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default WhereToFIndUs;

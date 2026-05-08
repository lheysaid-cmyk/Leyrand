import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

function ContactUsSection() {
  return (
    <div>
      <section className="relative w-full bg-primary/90 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/programs/DSC_0473.jpg')] bg-cover bg-center opacity-40"></div>

        {/* Content Wrapper */}
        <div className="relative flex flex-col items-center text-center px-6 md:px-12 py-20 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Want to work with us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-3xl"
          >
            Join a dynamic team shaping the future of legal practice — where
            innovation meets purpose and every voice matters.
          </motion.p>

          {/* Card Section */}
          <Button
            className="mt-4 rounded-none text-primary bg-white hover:bg-white hover:text-primary cursor-pointer"
            asChild
          >
            <a href="tel:+255786701586">
              <PhoneCall />
              Call us
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ContactUsSection;

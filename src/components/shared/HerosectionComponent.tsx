import { motion } from "framer-motion";

function HerosectionComponent({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div>
      <div
        className="relative h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-2 text-lg md:text-xl text-gray-200">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default HerosectionComponent;

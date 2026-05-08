import { Helmet } from "react-helmet-async";
import OurServices from "./home/OurServices";
import { CustomerLogo } from "./home/CustomerLogo";
import AboutUsSection from "./home/AboutUsSection";
import BlogSection from "./home/BlogSection";
import Herosection from "./home/Herosection";
import OurSectorsSection from "./home/OurSectorsSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Leyrand</title>
        <meta
          name="description"
          content="Welcome to our law firm's homepage."
        />
        <meta property="og:title" content="Home | Leyrand" />
      </Helmet>
      <div className="h-20 md:h-28 w-full bg-primary"></div>
      <Herosection />
      <CustomerLogo />
      <OurServices />
      <AboutUsSection />
      <OurSectorsSection />
      <BlogSection />
    </>
  );
};

export default Home;

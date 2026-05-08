import HerosectionComponent from "@/components/shared/HerosectionComponent";
import { Helmet } from "react-helmet-async";
import OurTeamSection from "./about/OurTeamSection";
import AboutHeroSection from "./about/AboutHeroSection";
import OurMissionSection from "./about/OurMissionSection";
import WhereToFIndUs from "./about/WhereToFIndUs";
// import ContactUsSection from "./about/ContactUsSection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About us | Leyrand</title>
        <meta
          name="description"
          content="Welcome to our law firm's homepage."
        />
        <meta property="og:title" content="Home | Leyrand" />
      </Helmet>
      <HerosectionComponent
        title={"About Us"}
        image="/about-us.jpeg"
        subtitle={
          "Learn more about our law firm and our dedicated team legal professionals to serve your legal needs"
        }
      />
      <AboutHeroSection />
      <OurMissionSection />
      <OurTeamSection />
      <WhereToFIndUs />
      {/* <ContactUsSection /> */}
    </>
  );
};

export default About;

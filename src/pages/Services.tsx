// import React from 'react'

import HerosectionComponent from "@/components/shared/HerosectionComponent";
import OurServices from "./home/OurServices";
import OurServiceSectors from "./services/OurServiceSectors";

function Services() {
  return (
    <div>
      <HerosectionComponent
        title={"Our Experties"}
        image="/experties.jpeg"
        subtitle={
          "Explore the wide range of services we offer to meet your needs and help you achieve your goals."
        }
      />
      <OurServices />
      <OurServiceSectors />
    </div>
  );
}

export default Services;

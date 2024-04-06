import styled, { css } from "styled-components";
import ServiceCard from "./ServiceCard";
import servicesData from "../DATA/servicesCards.json";

const ServicesHeader = styled.h2`
  color: #424244;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const ServicesDescrib = styled.p`
  color: rgba(37, 37, 37, 0.8);
  font-size: 20px;
  font-weight: 400;
`;

const ServicesCards = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function Services() {
  const partOfData = servicesData.slice(0, 4);
  return (
    <section style={{ marginTop: "60px" }}>
      <ServicesHeader>Discover Our Services</ServicesHeader>
      <ServicesDescrib>
        ExploreEra provides a one-stop solution for individuals seeking
        well-planned journeys. These services include expert advice on
        destination selection, flight and accommodation bookings, and customized
        itineraries to individual preferences.
      </ServicesDescrib>
      <ServicesCards>
        {partOfData.map((item) => (
          <ServiceCard
            key={item.id}
            img={item.img}
            header={item.header}
            text={item.descr}
          />
        ))}
      </ServicesCards>
    </section>
  );
}

export default Services;

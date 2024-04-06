import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import servicesData from "../DATA/servicesCards.json";
import { useState } from "react";
import Modal from "./Modal";

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
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const ServicesSeeAll = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: #c85100;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  text-decoration-line: underline;
  cursor: pointer;
`;

const ServicesCards = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

function Services() {
  const partOfData = servicesData.slice(0, 4);
  const [seeAllClicked, setSeeAllClicked] = useState(false);

  function handleSeeAll() {
    setSeeAllClicked(true);
  }

  return (
    <section
      style={{
        marginTop: "60px",
        marginBottom: "92px",
      }}
    >
      {seeAllClicked && <Modal data={servicesData} />}
      <ServicesHeader>Discover Our Services</ServicesHeader>
      <ServicesDescrib>
        ExploreEra provides a one-stop solution for individuals seeking
        well-planned journeys. These services include expert advice on
        destination selection, flight and accommodation bookings, and customized
        itineraries to individual preferences.
      </ServicesDescrib>
      <ButtonContainer>
        <ServicesSeeAll onClick={handleSeeAll}>See All</ServicesSeeAll>
      </ButtonContainer>
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

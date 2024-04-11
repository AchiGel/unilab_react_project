import Button from "../Button";
import styled from "styled-components";

const ServicesButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
  margin-top: 165px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default function ServicesButtons() {
  const buttonText = [
    "Flights",
    "Stays",
    "Car rentals",
    "Cruises",
    "Attractions",
  ];
  return (
    <ServicesButtonsContainer>
      {buttonText.map((item, index) => (
        <Button toRedirect={item} key={index} buttonText={item} size="small" />
      ))}
    </ServicesButtonsContainer>
  );
}

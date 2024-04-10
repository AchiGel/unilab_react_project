import Button from "../Button";
import styled from "styled-components";

const ServicesButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
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
        <Button key={index} buttonText={item} size="small" />
      ))}
    </ServicesButtonsContainer>
  );
}

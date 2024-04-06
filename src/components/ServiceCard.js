import styled from "styled-components";

const ServiceCardContainer = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

const ServiceCardImg = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 20px;
`;

const ServiceCardHeader = styled.h2`
  color: #424244;
  font-size: 32px;
  font-weight: 500;
`;

const ServiceCardText = styled.p`
  color: rgba(37, 37, 37, 0.8);
  font-size: 18px;
  font-weight: 500;
`;

function ServiceCard({ img, header, text }) {
  return (
    <ServiceCardContainer>
      <ServiceCardImg src={img} alt={img} />
      <ServiceCardHeader>{header}</ServiceCardHeader>
      <ServiceCardText>{text}</ServiceCardText>
    </ServiceCardContainer>
  );
}

export default ServiceCard;

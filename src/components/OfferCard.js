import { styled, css } from "styled-components";

const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 20px;
`;

const OfferImg = styled.img`
  ${({ height }) => {
    if (height === "none") {
      return css`
        object-fit: cover;
        width: 100%;
        border-radius: 20px;
      `;
    } else {
      return css`
        object-fit: cover;
        width: 100%;
        height: 25rem;
        max-height: 475.238px;
        border-radius: 20px;
      `;
    }
  }}
`;

const OfferTitle = styled.h2`
  color: #424244;
  font-size: 32px;
  font-weight: 500;
`;
const OfferDescr = styled.span`
  color: #424244;
  font-size: 24px;
  font-weight: 500;
`;
const OfferPrice = styled.span`
  color: #424244;
  font-size: 24px;
  font-weight: 500;
`;

function OfferCard({ img, title, descr, price, height }) {
  return (
    <OfferContainer>
      <OfferImg height={height} src={img} />
      <OfferTitle>{title}</OfferTitle>
      <OfferDescr>{descr}</OfferDescr>
      <OfferPrice>{price}</OfferPrice>
    </OfferContainer>
  );
}

export default OfferCard;

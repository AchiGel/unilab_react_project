import styled from "styled-components";
import arrowLeft from "../assets/icons/Chevron_LEFT.png";
import arrowRight from "../assets/icons/Chevron_Right.png";

const OffersHeader = styled.h2`
  color: #424244;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const SwipperArrows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SwipperButtons = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

function Offers() {
  return (
    <section style={{ marginBottom: "10px" }}>
      <OffersHeader>Popular Tour Offers</OffersHeader>
      <SwipperArrows>
        <SwipperButtons>
          <img src={arrowLeft} alt="arrow" />
        </SwipperButtons>
        <SwipperButtons>
          <img src={arrowRight} alt="arrow" />
        </SwipperButtons>
      </SwipperArrows>
    </section>
  );
}

export default Offers;

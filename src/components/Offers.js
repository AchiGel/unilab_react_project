import styled from "styled-components";
import arrowLeft from "../assets/icons/Chevron_LEFT.png";
import arrowRight from "../assets/icons/Chevron_Right.png";
import OfferCard from "../components/OfferCard";
import { useRef } from "react";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

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
  margin-bottom: 10px;
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

function Offers({ data }) {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <section style={{ marginBottom: "60px" }}>
      <OffersHeader>Popular Tour Offers</OffersHeader>
      <SwipperArrows>
        <SwipperButtons onClick={goPrev}>
          <img src={arrowLeft} alt="arrow" />
        </SwipperButtons>
        <SwipperButtons onClick={goNext}>
          <img src={arrowRight} alt="arrow" />
        </SwipperButtons>
      </SwipperArrows>

      <swiper-container
        ref={swiperRef}
        slides-per-view="4"
        speed="500"
        css-mode="true"
      >
        {data.map((item) => (
          <swiper-slide key={item.id}>
            <OfferCard
              img={item.imgLink}
              title={item.title}
              descr={item.description}
              price={item.price}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
}

export default Offers;

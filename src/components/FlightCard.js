import styled from "styled-components";
import Button from "./Button";

const FlightCardContainer = styled.div`
  padding: 40px 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background: #fff;
`;

const FlightAirlines = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FlightDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 50%;
  max-width: 447px;
`;

const FlightPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FlightAirlinesTitle = styled.h3`
  color: #424244;
  font-size: 20px;
  font-weight: 400;
`;

const StopsCube = styled.div`
  height: 15px;
  width: 15px;
  background-color: #dbdbdb;
  border: 1px solid darkgray;
`;

export default function FlightCard({
  airlinesImg,
  airlines,
  takeOff,
  landing,
  price,
  stops,
}) {
  function stopsQuantity(stop) {
    if (stop === 0) {
      return;
    } else if (stop === 1) {
      return <StopsCube></StopsCube>;
    } else {
      return (
        <>
          <StopsCube></StopsCube>
          <StopsCube></StopsCube>
        </>
      );
    }
  }

  return (
    <FlightCardContainer>
      <FlightAirlines>
        <img src={airlinesImg} alt={airlines} />
        <FlightAirlinesTitle>{airlines}</FlightAirlinesTitle>
      </FlightAirlines>
      <FlightDetails>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <span
            style={{ color: "#424244", fontSize: "24px", fontWeight: "400" }}
          >
            Take off
          </span>
          <span
            style={{ color: "#424244", fontSize: "24px", fontWeight: "400" }}
          >
            Landing
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span style={{ fontSize: "24px", color: "#424244" }}>
            {takeOff}:00
          </span>
          <div
            style={{
              height: "1px",
              width: "180px",
              backgroundColor: "#C85100",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {stopsQuantity(stops)}
          </div>
          <span style={{ fontSize: "24px", color: "#424244" }}>
            {landing}:00
          </span>
          <span
            style={{
              display: "flex",
              color: "rgba(66, 66, 68, 0.60)",
              fontSize: "24px",
            }}
          >
            {landing - takeOff} Hours
          </span>
        </div>
      </FlightDetails>
      <FlightPrice>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "140px",
          }}
        >
          <span style={{ color: "#424244", fontSize: "24px" }}>Price</span>
          <span
            style={{ color: "#424244", fontSize: "24px", fontWeight: "500" }}
          >
            {price}$
          </span>
        </div>
        <Button buttonText="View Deal" />
      </FlightPrice>
    </FlightCardContainer>
  );
}

import Select from "react-select";
import Button from "../Button";
import FlightCard from "../FlightCard";

import styled from "styled-components";

import flightData from "../../DATA/flightData.json";
import { useState } from "react";
import Accordeon from "../Accordeon";

const FlightsPageSearch = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 60px;
`;

const FlightsPageSearchTop = styled.div`
  display: flex;
  align-items: center;
  max-width: 409px;
  gap: 20px;
`;

const FlightsPageSearchBottom = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export default function FlightsPage() {
  const options = [
    { value: "Tbilisi", label: "Tbilisi" },
    { value: "Paris", label: "Paris" },
    { value: "London", label: "London" },
    { value: "Moscow", label: "Moscow" },
    { value: "Prague", label: "Prague" },
    { value: "Abu-dhabi", label: "Abu-dhabi" },
    { value: "Berlin", label: "Berlin" },
    { value: "Madrid", label: "Madrid" },
  ];

  const [searchClicked, setSearchClicked] = useState(false);
  const [updatedData, setUpdatedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  function handleClick() {
    setSearchClicked(true);
  }

  function handleCheck(e) {
    if (e.target.checked && e.target.parentElement.textContent === "Direct") {
      setUpdatedData([...flightData]);
      const filtered = updatedData.filter((item) => item.stops === 0);
      setFilteredData([...filtered]);
    } else if (
      e.target.checked &&
      e.target.parentElement.textContent === "One Stop"
    ) {
      setUpdatedData([...flightData]);
      const filtered = updatedData.filter((item) => item.stops === 1);
      setFilteredData([...filtered]);
    } else {
      setUpdatedData([...flightData]);
      const filtered = updatedData.filter((item) => item.stops === 2);
      setFilteredData([...filtered]);
    }
  }

  return (
    <FlightsPageSearch>
      <FlightsPageSearchTop>
        <label>One-way</label>
        <label>1 Adult</label>
        <label>Economy</label>
      </FlightsPageSearchTop>
      <FlightsPageSearchBottom>
        <Select styles={{ width: "30%" }} options={options} />
        <Select options={options} />
        <input
          style={{
            padding: "15px 20px",
            border: "2px solid #FF6700",
            borderRadius: "20px",
          }}
          type="date"
        />
        <Button handleClick={handleClick} buttonText="Search" size="medium" />
      </FlightsPageSearchBottom>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "20% auto",
          gap: "20px",
        }}
      >
        {searchClicked && <Accordeon handleCheck={handleCheck} />}
        {searchClicked && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {filteredData.map((item) => (
              <FlightCard
                key={item.id}
                airlinesImg={item.airlinesImg}
                airlines={item.airlines}
                takeOff={item.takeOff}
                landing={item.landing}
                price={item.price}
                stops={item.stops}
              />
            ))}
          </div>
        )}
      </main>
    </FlightsPageSearch>
  );
}

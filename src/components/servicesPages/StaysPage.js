import Select from "react-select";
import Button from "../Button";
import Offers from "../Offers";
import staysData from "../../DATA/staysData.json";
import { useState } from "react";

export default function StaysPage() {
  const optionsCity = [
    { value: "Tbilisi", label: "Tbilisi" },
    { value: "Paris", label: "Paris" },
    { value: "London", label: "London" },
    { value: "Moscow", label: "Moscow" },
    { value: "Prague", label: "Prague" },
    { value: "Abu-dhabi", label: "Abu-dhabi" },
    { value: "Berlin", label: "Berlin" },
    { value: "Madrid", label: "Madrid" },
  ];
  const optionsAdults = [
    { value: "1", label: "1 Adult" },
    { value: "2", label: "2 Adults" },
    { value: "3", label: "3 Adults" },
    { value: "4", label: "4 Adults" },
    { value: "5", label: "5 Adults" },
    { value: "6", label: "6 Adults" },
    { value: "7", label: "7 Adults" },
    { value: "8", label: "8 Adults" },
  ];

  const [buttonClicked, setButtonClicked] = useState(false);

  function handleClick() {
    setButtonClicked(true);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Select options={optionsCity} />
        <input
          style={{
            padding: "15px 20px",
            borderRadius: "20px",
            border: "2px solid #FF6700",
          }}
          type="date"
        />
        <Select options={optionsAdults} />
        <Button handleClick={handleClick} size="medium" buttonText="Search" />
      </div>
      {buttonClicked ? null : (
        <Offers
          height="none"
          header="Browse by property type"
          data={staysData}
        />
      )}
    </div>
  );
}

import { useState } from "react";

export default function Accordeon({ handleCheck }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          padding: "20px 30px",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      >
        <h3
          style={{
            paddingBottom: "10px",
            borderBottom: "1px solid orange",
            fontSize: "28px",
            fontWeight: "400",
            color: "#424244",
          }}
        >
          Cheapest
        </h3>
        <h3
          style={{
            paddingBottom: "10px",
            borderBottom: "1px solid orange",
            fontSize: "28px",
            fontWeight: "400",
            color: "#424244",
          }}
        >
          Quickest
        </h3>
        <h3
          style={{
            fontSize: "28px",
            fontWeight: "400",
            color: "#424244",
          }}
        >
          best
        </h3>
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px 30px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <AccordeonCard
          cardTitle="Stops"
          cardItems={["Direct", "One Stop", "Two Stops"]}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          handleCheck={handleCheck}
        />
        <AccordeonCard cardTitle="Times" />
        <AccordeonCard cardTitle="Airlines" />
        <AccordeonCard cardTitle="TimAirportses" />
        <AccordeonCard cardTitle="Duration" />
        <AccordeonCard cardTitle="Price" />
        <AccordeonCard cardTitle="Price Calculator" />
      </div>
    </aside>
  );
}

function AccordeonCard({
  cardTitle,
  cardItems,
  isClicked,
  setIsClicked,
  handleCheck,
}) {
  return (
    <div>
      <h3
        style={{
          fontSize: "28px",
          color: "#424244",
          fontWeight: "400",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        {cardTitle}
      </h3>
      {isClicked && (
        <ul>
          <li>
            <label>
              <input type="checkbox" onChange={handleCheck} />
              {cardItems[0]}
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" onChange={handleCheck} />
              {cardItems[1]}
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" onChange={handleCheck} />
              {cardItems[2]}
            </label>
          </li>
        </ul>
      )}
    </div>
  );
}

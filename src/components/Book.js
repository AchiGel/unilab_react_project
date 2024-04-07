import styled from "styled-components";
import React from "react";
import Select from "react-select";
import Button from "../components/Button";

const BookForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const BookFormHeader = styled.h2`
  color: #424244;
  font-size: 40px;
  font-weight: 500;
`;

const BookSelectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  row-gap: 40px;
  column-gap: 80px;
`;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Book() {
  return (
    <section
      style={{
        backgroundColor: "#E0E0E0",
        marginBottom: "60px",
        marginInline: "-10.7%",
        padding: "50px 8.8%",
      }}
    >
      <BookForm>
        <BookFormHeader>Ready To Book A Trip?</BookFormHeader>
        <BookSelectGrid>
          <Select
            styles={{ padding: "20px" }}
            options={options}
            placeholder="Your starting location"
          />
          <Select options={options} placeholder="Choose a tour offer" />
          <Select options={options} placeholder="Choose date" />
          <Select options={options} placeholder="Persons" />
        </BookSelectGrid>
        <Button size="medium" buttonText="Book Now" />
      </BookForm>
    </section>
  );
}

export default Book;

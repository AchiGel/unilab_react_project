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
  { value: "Rome, Italy", label: "Rome, Italy" },
  { value: "Luxor City, Egypt", label: "Luxor City, Egypt" },
  { value: "Paris, France", label: "Paris, France" },
  { value: "Barcelona, Spain", label: "Barcelona, Spain" },
  { value: "Tsavo, Kenya", label: "Tsavo, Kenya" },
  { value: "Prague, Chequia", label: "Prague, Chequia" },
  { value: "Shanghai, China", label: "Shanghai, China" },
  { value: "Hanauma, Hawaii", label: "Hanauma, Hawaii" },
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
          <Select options={options} placeholder="Your starting location" />
          <Select placeholder="Choose a tour offer" />
          <Select placeholder="Choose date" />
          <Select placeholder="Persons" />
        </BookSelectGrid>
        <Button size="medium" buttonText="Book Now" />
      </BookForm>
    </section>
  );
}

export default Book;

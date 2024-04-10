import Select from "react-select";
import Button from "../Button";

import styled from "styled-components";

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
`;

const FlightsPageSearchBottom = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export default function FlightsPage() {
  return (
    <FlightsPageSearch>
      <FlightsPageSearchTop>
        <Select />
        <Select />
        <Select />
      </FlightsPageSearchTop>
      <FlightsPageSearchBottom>
        <Select />
        <Select />
        <Select />
        <Button buttonText="Search" size="medium" />
      </FlightsPageSearchBottom>
    </FlightsPageSearch>
  );
}

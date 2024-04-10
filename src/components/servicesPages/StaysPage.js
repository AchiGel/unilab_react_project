import Select from "react-select";
import Button from "../Button";
import Offers from "../Offers";
import staysData from "../../DATA/staysData.json";

export default function StaysPage() {
  return (
    <div>
      <Select />
      <Select />
      <Select />
      <Button size="medium" buttonText="Search" />
      <Offers height="none" header="Browse by property type" data={staysData} />
    </div>
  );
}

import ServicesButtons from "../components/servicesPages/ServicesButtons";
import { Outlet } from "react-router-dom";

export default function ServicesLayout() {
  return (
    <div>
      <ServicesButtons />
      <Outlet />
    </div>
  );
}

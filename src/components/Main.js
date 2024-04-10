import Services from "./Services";
import Video from "./Video";
import Offers from "./Offers";
import Blogs from "./Blogs";
import Book from "./Book";

import styled from "styled-components";
import LandingBackground from "./LandingBackground";

import offersData from "../DATA/offersCards.json";

const MainContainer = styled.main`
  background-color: #f6f6f6;
`;

function Main() {
  return (
    <MainContainer>
      <LandingBackground />
      <Services />
      <Video />
      <Offers data={offersData} header="Popular Tour Offers" />
      <Blogs />
      <Book />
    </MainContainer>
  );
}

export default Main;

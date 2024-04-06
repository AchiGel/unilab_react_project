import Services from "./Services";
import Video from "./Video";
import Offers from "./Offers";
import Blogs from "./Blogs";
import Book from "./Book";

import styled from "styled-components";

const MainContainer = styled.main`
  background-color: #f6f6f6;
`;

function Main() {
  return (
    <MainContainer>
      <Services />
      <Video />
      <Offers />
      <Blogs />
      <Book />
    </MainContainer>
  );
}

export default Main;

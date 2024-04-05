import styled from "styled-components";

const FooterRow = styled.footer`
  margin-top: 40px;
  margin-inline: -10%;
  padding-inline: 8.8%;
  background-color: #eae9e9;
  display: flex;
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

function Footer() {
  return (
    <FooterRow>
      <FooterColumn>
        <h3>ExploreEra</h3>
        <p>Travel agency which helps you to plan your perfect holidays</p>
        <span>Follow us</span>
        <div>icons</div>
      </FooterColumn>
      <FooterColumn>
        <h4>Links</h4>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Blogs</li>
          <li>Our services</li>
          <li>Our offers</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <h4>Contact us</h4>
        <span>exploreera@gmail.com</span>
        <span>555111222</span>
        <span>Subscribe news</span>
        <input type="email" />
      </FooterColumn>
    </FooterRow>
  );
}

export default Footer;

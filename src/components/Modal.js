import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const ModalOverlay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 10px);
  min-height: 100vh;
  width: 80%;
  background-color: rgba(66, 66, 68, 0.6);
  padding: 40px;
`;

const ModalInner = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 10px;
`;

function Modal({ data }) {
  return (
    <ModalOverlay>
      <ModalInner>
        {data.map((item) => (
          <ServiceCard
            key={item.id}
            img={item.img}
            header={item.header}
            text={item.descr}
          ></ServiceCard>
        ))}
      </ModalInner>
    </ModalOverlay>
  );
}

export default Modal;

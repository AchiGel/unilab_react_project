import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(66, 66, 68, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalInner = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  padding: 20px;
  max-width: 80vw;
  max-height: 80vh;
  overflow-y: auto;
`;

function Modal({ data, closeModal }) {
  function preventClosingOnClick(e) {
    e.stopPropagation();
  }
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalInner onClick={preventClosingOnClick}>
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

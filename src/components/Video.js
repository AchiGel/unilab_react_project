import styled from "styled-components";

const VideoHeader = styled.h2`
  color: #424244;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Video() {
  return (
    <section style={{ marginBottom: "60px" }}>
      <VideoHeader>Watch Our Memorable Trips</VideoHeader>
      <video width="100%" height="724.377" controls>
        <source src="./Videos/video1.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default Video;

import styled from "styled-components";

import video from "../assets/video/6394054-uhd_4096_2048_24fps.mp4";

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
      <video
        style={{ borderRadius: "20px", objectFit: "cover" }}
        width="100%"
        height="45%"
        controls
      >
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
}

export default Video;

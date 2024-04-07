import styled from "styled-components";

const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BlogCardImg = styled.img`
  object-fit: fill;
  border-radius: 20px;
  height: 341.514px;
`;

const BlogCardHeader = styled.h3`
  color: #424244;
  font-size: 32px;
  font-weight: 500;
`;

function BlogCard({ imgLink, header }) {
  return (
    <BlogCardContainer>
      <BlogCardImg src={imgLink} alt={header} />
      <BlogCardHeader>{header}</BlogCardHeader>
    </BlogCardContainer>
  );
}

export default BlogCard;

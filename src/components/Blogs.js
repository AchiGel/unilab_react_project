import styled from "styled-components";
import blogsData from "../DATA/blogsCards.json";
import BlogCard from "../components/BlogCard";

const BlogsHeader = styled.h2`
  color: #424244;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const BlogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  column-gap: 20px;
  row-gap: 40px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  }
`;

function Blogs() {
  return (
    <section style={{ marginBottom: "60px" }}>
      <BlogsHeader>Blogs</BlogsHeader>
      <BlogsGrid>
        {blogsData.map((item) => (
          <BlogCard
            key={item.id}
            imgLink={item.imgLink}
            header={item.blogHeader}
          />
        ))}
      </BlogsGrid>
    </section>
  );
}

export default Blogs;

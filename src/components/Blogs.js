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
`;

function Blogs() {
  return (
    <section>
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

import styled from "styled-components";

const CategoryShow = styled.div`
  width: 178px;
  height: fit-content;
  border: 3px solid #829ad5;
  border-radius: 20px;
  padding: 10px;
`;

const H2 = styled.h2`
  margin: 0;
  border-bottom: 2px solid #bbbffe;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

function Category({ tags }) {
  return (
    <CategoryShow>
      <H2>카테고리</H2>
      <Tags>
        {tags.slice(0, 10)?.map((t) => (
          <span key={t.id}>{t.name} </span>
        ))}
      </Tags>
    </CategoryShow>
  );
}

export default Category;

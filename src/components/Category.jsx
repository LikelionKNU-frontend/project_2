import "./Category.css";

function Category({ tags }) {
  return (
    <div className="category">
      <h2>카테고리</h2>
      <div className="game_tags">
        {tags.slice(0, 10)?.map((t) => (
          <span key={t.id}>{t.name} </span>
        ))}
      </div>
    </div>
  );
}

export default Category;

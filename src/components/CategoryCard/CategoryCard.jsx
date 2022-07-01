const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <div
        className="category-img"
        style={{
          backgroundImage: "url(" + category.img + ")",
        }}
      >
        <h3 className="px-2 py-1" style={{ backgroundColor: "rgba(1, 1, 1, 0.5)" }}>
          {category.alias}
        </h3>
        <span></span>
      </div>
    </div>
  );
};
export default CategoryCard;

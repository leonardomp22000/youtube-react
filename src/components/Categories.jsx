export default function Categories() {
  const categories = [
    "All",
    "Music",
    "Gamming",
    "Code",
    "Programmming",
    "LifeStyle",
    "Sports",
  ];
  return (
    <div id="categories-list">
      {/*
            <span className="category">Cat1</span>
            <span className="category">Cat2</span>
            <span className="category">Cat3</span>
*/} 
           
      {categories.map((category) => {
        return <span className="category">{category}</span>;
      })}
        
    </div>
  );
}

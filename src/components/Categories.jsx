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
    <div className="flex flex-row gap-4">
      {/*
            <span className="category">Cat1</span>
            <span className="category">Cat2</span>
            <span className="category">Cat3</span>
*/} 
           
      {categories.map((category) => {
        return <span className="p-2 rounded-[20px] bg-[#282828]">{category}</span>;
      })}
        
    </div>
  );
}

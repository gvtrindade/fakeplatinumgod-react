export default function ItemIcons({ itemCategory, displayedItems }) {
  return (
    <div>
      {displayedItems.map((item,index) => (
        <div>
          <a href={item.Link} target="_blank" rel="noreferrer">
            <img
              src={require(`../assets/images/${item.ID}${itemCategory}.png`).default}
              alt={item.Name}
              key={index}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

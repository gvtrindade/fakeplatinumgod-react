export default function TrinketIcons({ itemCategory, displayedTrinkets }) {
  return (
    <div>
      {displayedTrinkets.map((item,index) => (
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

import * as itemData from '../assets/items.json';

export default function ItemIcons({ itemCategory }) {
  return (
    <div>
      {Object.values(itemData)[0].map((item) => (
        <div>
          <a href={item.Link} target="_blank" rel="noreferrer">
            <img
              src={require(`../assets/images/${itemCategory}/${item.ID}.png`).default}
              alt={item.Name}
              key={item.ID + item.Category}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

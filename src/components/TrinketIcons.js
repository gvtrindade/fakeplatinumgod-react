import * as trinketData from '../assets/trinkets.json';

export default function TrinketIcons({ itemCategory }) {

  return (
    <div>
      {Object.values(trinketData)[0].map((item) => (
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

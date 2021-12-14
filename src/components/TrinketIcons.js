export default function TrinketIcons({
  itemCategory,
  displayedTrinkets,
  showModal,
  setSelectedItem,
}) {
  const showInfo = (selectedItem) => {
    setSelectedItem(displayedTrinkets.find((item) => item.Name === selectedItem));
    showModal();
  };

  return (
    <div>
      {displayedTrinkets.map((item, index) => (
        <div onClick={({ target }) => showInfo(target.id)}>
          <img
            src={
              require(`../assets/images/${item.ID}${itemCategory}.png`).default
            }
            alt={item.Name}
            id={item.Name}
            key={index}
          />
        </div>
      ))}
    </div>
  );
}

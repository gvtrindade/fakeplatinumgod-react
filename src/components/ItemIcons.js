export default function ItemIcons({
  itemCategory,
  displayedItems,
  showModal,
  setSelectedItem,
}) {
  const showInfo = (selectedItem) => {
    setSelectedItem(displayedItems.find((item) => item.Name === selectedItem));
    showModal();
  };

  return (
    <div>
      {displayedItems.map((item, index) => (
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

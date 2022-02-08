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

  const getSRCImages = (item) =>{
    try {
      return require(`../../assets/images/${item.ID}${itemCategory}.png`).default
    } catch {
      return ""
    }
  }

  return (
    <div className="grid">
      {displayedItems.map((item, index) => (
        <div onClick={({ target }) => showInfo(target.id)}>
          <img
            src={
              getSRCImages(item)
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

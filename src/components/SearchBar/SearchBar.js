export default function SearchBar({
  items,
  setDisplayedItems,
  trinkets,
  setDisplayedTrinkets,
}) {
  const filterItems = (searchedValue) => {
    setDisplayedItems(
      items.filter((item) =>
        item.Name.toUpperCase().includes(searchedValue.toUpperCase())
      )
    );
    setDisplayedTrinkets(
      trinkets.filter((trinket) =>
        trinket.Name.toUpperCase().includes(searchedValue.toUpperCase())
      )
    );
  };

  window.onfocus = (event) => {
    document.getElementById('searchbar').select();
  };

  return (
    <>
      <input
        id="searchbar"
        type="text"
        placeholder="Search"
        onChange={({ target }) => filterItems(target.value)}
      />
    </>
  );
}

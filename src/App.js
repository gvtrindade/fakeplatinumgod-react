import './App.css';
import Button from './components/Button';
import ItemIcons from './components/ItemIcons';
import SearchBar from './components/SearchBar';
import TrinketIcons from './components/TrinketIcons';
import * as itemData from './assets/items.json';
import * as trinketData from './assets/trinkets.json';
import { useState } from 'react';
import InfoModal from './components/InfoModal';

export default function App() {
  const items = Object.values(itemData)[0];
  const trinkets = Object.values(trinketData)[0];
  const [displayedItems, setDisplayedItems] = useState(items);
  const [displayedTrinkets, setDisplayedTrinkets] = useState(trinkets);

  const [modalStyle, setModalStyle] = useState('none');
  const showModal = () => {
    modalStyle === 'inline' ? setModalStyle('none') : setModalStyle('inline');
  };

  window.onclick = function (event) {
    if (event.target.className === 'modal') {
      showModal();
    }
  };

  const [selectedItem, setSelectedItem] = useState();

  const [isItemsActive, setIsItemsActive] = useState(true)
  const [isTrinketsActive, setIsTrinketsActive] = useState(true)

  const hideItemsOrTrinkets = (listToHide) => {  
    if (listToHide === 'Items'){
      if (isItemsActive && isTrinketsActive){
        setIsItemsActive(false)
      } else {
        setIsItemsActive(true)
      }
    } else {
      if (isItemsActive && isTrinketsActive){
        setIsTrinketsActive(false)
      } else {
        setIsTrinketsActive(true)
      }
    }
  }

  return (
    <>
      <div>
        <SearchBar
          items={items}
          trinkets={trinkets}
          setDisplayedItems={setDisplayedItems}
          setDisplayedTrinkets={setDisplayedTrinkets}
        />
        <Button buttonValue={'Items'} hideItemsOrTrinkets={hideItemsOrTrinkets} />
        <Button buttonValue={'Trinkets'} hideItemsOrTrinkets={hideItemsOrTrinkets} />
      </div>

      <div style={{ display: modalStyle }}>
        <InfoModal selectedItem={selectedItem} />
      </div>

      <div>
        {isItemsActive && <ItemIcons
          id="Items"
          itemCategory="I"
          displayedItems={displayedItems}
          showModal={showModal}
          setSelectedItem={setSelectedItem}
        />}
        {isTrinketsActive && <TrinketIcons
          id="Trinkets"
          itemCategory="T"
          displayedTrinkets={displayedTrinkets}
          showModal={showModal}
          setSelectedItem={setSelectedItem}
        />}
      </div>
    </>
  );
}
import './App.css';
import Button from './components/Button/Button';
import Icons from './components/Icons/Icons';
import SearchBar from './components/SearchBar/SearchBar';
import InfoModal from './components/InfoModal/InfoModal';
import * as itemData from './assets/Items.json';
import * as trinketData from './assets/Trinkets.json';
import { useState } from 'react';

export default function App() {
  
  const items = itemData.default;
  const trinkets = trinketData.default;
  const [displayedItems, setDisplayedItems] = useState(items);
  const [displayedTrinkets, setDisplayedTrinkets] = useState(trinkets);
  
  const [modalStyle, setModalStyle] = useState('none');
  const showModal = () => {
    modalStyle === 'inline' ? setModalStyle('none') : setModalStyle('inline');
  };
  
  window.onclick = (event) => {
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
      <div className='searchBar center'>
        <SearchBar
          items={items}
          trinkets={trinkets}
          setDisplayedItems={setDisplayedItems}
          setDisplayedTrinkets={setDisplayedTrinkets}
        />
        <Button buttonValue={'Items'} hideItemsOrTrinkets={hideItemsOrTrinkets} />
        <Button buttonValue={'Trinkets'} hideItemsOrTrinkets={hideItemsOrTrinkets} />
      </div>

      <div style={{ display: modalStyle }} className="modal">
        <InfoModal selectedItem={selectedItem} />
      </div>

      <div className='content'>
        {isItemsActive && <Icons
          id="Items"
          itemCategory="I"
          displayedItems={displayedItems}
          showModal={showModal}
          setSelectedItem={setSelectedItem}
        />}
        {isTrinketsActive && <Icons
          id="Trinkets"
          itemCategory="T"
          displayedItems={displayedTrinkets}
          showModal={showModal}
          setSelectedItem={setSelectedItem}
        />}
      </div>
    </>
  );
}
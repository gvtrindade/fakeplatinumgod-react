import './App.css';
import Button from './components/Button';
import ItemIcons from './components/ItemIcons';
import SearchBar from './components/SearchBar';
import TrinketIcons from './components/TrinketIcons';
import * as itemData from './assets/items.json';
import * as trinketData from './assets/trinkets.json';
import { useState } from 'react';

export default function App() {
  const items = Object.values(itemData)[0];
  const trinkets = Object.values(trinketData)[0];
  const [displayedItems, setDisplayedItems] = useState(items);
  const [displayedTrinkets, setDisplayedTrinkets] = useState(trinkets);

  return (
    <>
      <div>
        <SearchBar
          items={items}
          trinkets={trinkets}
          setDisplayedItems={setDisplayedItems}
          setDisplayedTrinkets={setDisplayedTrinkets}
        />
        <Button buttonValue={'Items'}/>
        <Button buttonValue={'Trinkets'}/>
      </div>

      <div>
        <ItemIcons id="Items" itemCategory="I" displayedItems={displayedItems}/>
        <TrinketIcons id="Trinkets" itemCategory="T" displayedTrinkets={displayedTrinkets} />
      </div>
    </>
  );
}

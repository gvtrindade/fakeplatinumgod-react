import './App.css';
import Button from './components/Button';
import ItemIcons from './components/ItemIcons';
import TrinketIcons from './components/TrinketIcons';

export default function App() {
  return (
    <>
      {/* <navbar>
        <input
          type="text"
          id="searchBar"
          placeholder="Search"
          onkeyup="filter()"
        />

        <Button buttonValue={'Items'}/>
        <Button buttonValue={'Trinkets'}/>

      </navbar> */}

      <div>
        <ItemIcons itemCategory="items" />
        <TrinketIcons itemCategory="trinkets" />
      </div>
    </>
  );
}

import { useState } from 'react';

import './Button.css';

let deactivatedButtonCategory;
let isAButtonDeactivated = false;

export default function Button({ buttonValue, hideItemsOrTrinkets }) {
  let buttonCategory;
  buttonValue === 'Items'
    ? (buttonCategory = 'items')
    : (buttonCategory = 'trinkets');

  const [buttonClass, setButtonClass] = useState(`button ${buttonCategory}`);

  const hideCategory = (categoryToHide) => {
    hideItemsOrTrinkets(categoryToHide);

    if (!isAButtonDeactivated) {
      setButtonClass('button deactivated');
      deactivatedButtonCategory = buttonCategory;
      isAButtonDeactivated = true;
    } else if (
      isAButtonDeactivated &&
      deactivatedButtonCategory === buttonCategory
    ) {
      setButtonClass(`button ${buttonCategory}`);
      isAButtonDeactivated = false;
    }
  };

  return (
    <input
      type="button"
      className={buttonClass}
      value={buttonValue}
      id={`${buttonValue}Button`}
      onClick={({ target }) => hideCategory(target.value)}
    />
  );
}

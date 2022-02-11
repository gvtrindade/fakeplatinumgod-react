import { useState } from 'react' 

import "./Button.css"


export default function Button({ buttonValue, hideItemsOrTrinkets }) {

  const [buttonClass, setButtonClass] = useState("button");
  const hideCategory = (categoryToHide) => {
    hideItemsOrTrinkets(categoryToHide)
    if (buttonClass === "button"){
      setButtonClass("button deactivated")
    } else {
      setButtonClass("button")
    }
  }

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

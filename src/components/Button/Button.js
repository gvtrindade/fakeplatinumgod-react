import "./Button.css"
export default function Button({ buttonValue, hideItemsOrTrinkets }) {

  return (
    <input
      type="button"
      className="button"
      value={buttonValue}
      id={`${buttonValue}Button`}
      onClick={({ target }) => hideItemsOrTrinkets(target.value)}
    />
  );
}

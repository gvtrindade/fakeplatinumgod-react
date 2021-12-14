export default function Button({ buttonValue, hideItemsOrTrinkets }) {

  return (
    <input
      type="button"
      value={buttonValue}
      id={`${buttonValue}Button`}
      className="frameButton"
      onClick={({ target }) => hideItemsOrTrinkets(target.value)}
    />
  );
}

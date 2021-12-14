export default function Button({ buttonValue }) {
  return (
    <input
      type="button"
      value={buttonValue}
      id={`${buttonValue}Button`}
      className="frameButton"
    />
  );
}

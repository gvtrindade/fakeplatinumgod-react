export default function InfoModal({ selectedItem }) {
  return(
    <div>
      <div className="modalBackground"></div>
      <div className="modalContent">
        <p>{selectedItem?.Name}</p>
        <p>{selectedItem?.Subname}</p>
        <p>{selectedItem?.Description}</p>
      </div>
    </div>
  )
}
import "./InfoModal.css"

export default function InfoModal({ selectedItem }) {
  return(
    <>
      <div className="modalContent">
        <h2 className="name">{selectedItem?.Name}</h2>
        <h3 className="subname">{selectedItem?.Subname}</h3>
        <hr/>
        <p className="description">{selectedItem?.Description}</p>
      </div>
    </>
  )
}
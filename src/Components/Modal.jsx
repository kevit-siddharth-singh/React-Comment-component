import React from "react";

const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Invalid Comment 😋</h3>
          <p className="py-4">Press ESC key or click the Close to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

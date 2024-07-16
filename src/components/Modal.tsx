import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/ModalSlice";
import { clearCart } from "../features/cart/CartSlice";

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <aside>
      <div className="modal-container">
        <div className="modal">
          <h4>買い物かごを全て空にしますか？</h4>
          <div className="btn-container">
            <button
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              OK
            </button>
            <button
              className="btn clear-btn"
              onClick={() => dispatch(closeModal())}
            >
              やめておく
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

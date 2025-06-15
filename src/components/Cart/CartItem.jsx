import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleAdd(item) {
    dispatch(cartActions.addToCart(item));
  }

  function handleSubtract(id) {
    dispatch(cartActions.removeFromCart(id));
  }

  return (
    <li className="border border-black/20 p-4 rounded-lg">
      <div className="w-full grid grid-cols-3">
        <h1 className="text-xl tracking-tight text-black flex items-end gap-2">
          <span>{item.name}</span> -
          <span className="text-lg">${item.price.toFixed(2)}</span>
        </h1>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => handleSubtract(item.id)}
            className="size-6 flex items-center justify-center cursor-pointer bg-black text-white rounded-full"
          >
            -
          </button>
          <h1 className="text-lg tracking-tight text-black text-center font-mono">
            {item.quantity}
          </h1>
          <button
            onClick={() => handleAdd(item)}
            className="size-6 flex items-center justify-center cursor-pointer bg-black text-white rounded-full"
          >
            +
          </button>
        </div>
        <p className="text-lg tracking-tight text-black text-end">
          ${item.totalPrice.toFixed(2)}
        </p>
      </div>
    </li>
  );
}

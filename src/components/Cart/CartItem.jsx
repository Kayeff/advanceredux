import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

export default function CartItem({ item }) {
  const { id, name, totalPrice, quantity, price } = item;
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(cartActions.addToCart({ id, price, name }));
  }

  function handleSubtract() {
    dispatch(cartActions.removeItem(id));
  }

  return (
    <li className="border border-black/20 p-4 rounded-lg">
      <header className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h3 className="tracking-tighter text-xl">{name}</h3>
          <h3 className="tracking-tighter text-xl">x</h3>
          <h3 className="tracking-tighter text-xl">{quantity}</h3>
        </div>
        <div>
          ${totalPrice.toFixed(2)} <span>(${price.toFixed(2)}/item)</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSubtract}
            className="size-6 flex items-center justify-center rounded-full bg-black text-white text-lg cursor-pointer hover:bg-red-500"
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={handleAdd}
            className="size-6 flex items-center justify-center rounded-full bg-black text-white text-lg cursor-pointer hover:bg-green-500"
          >
            +
          </button>
        </div>
      </header>
    </li>
  );
}

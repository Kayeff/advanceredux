import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import { cartActions } from "../../store/cart";

export default function ProductItem({ prod }) {
  const dispatch = useDispatch();
  const { title, price, description, id } = prod;

  function handleAddToCart() {
    dispatch(cartActions.addToCart({ id, price, title }));
  }

  return (
    <li className="w-full">
      <Card>
        <header className="w-full flex items-center justify-between">
          <h3 className="text-xl tracking-tight">{title}</h3>
          <p className="text-lg tracking-tight text-black">
            ${price.toFixed(2)}
          </p>
        </header>
        <p className="tracking-tight text-black/80">{description}</p>
        <div className="w-full flex items-center justify-end">
          <button
            onClick={() => handleAddToCart()}
            className="rounded-lg p-2 px-4 bg-black text-white cursor-pointer active:scale-105 duration-300"
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
}

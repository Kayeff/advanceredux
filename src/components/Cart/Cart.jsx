import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-1/2 flex flex-col gap-2">
        <div className="w-full flex items-center justify-between">
          <h2 className="tracking-tighter text-2xl">
            Your Shopping Cart {items.length === 0 && "is empty"}
          </h2>
          <p>( {totalQuantity} items )</p>
        </div>
        <ul className="w-full flex flex-col gap-2">
          {items.length !== 0 &&
            items.map((item) => <CartItem key={item.id} item={item} />)}
          {items.length === 0 && (
            <h1 className="tracking-tighter text-black/80">
              Please add an item to the cart.
            </h1>
          )}
        </ul>
      </div>
    </section>
  );
}

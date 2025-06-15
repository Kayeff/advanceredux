import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cart";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-1/2 flex flex-col gap-5 shadow-lg border border-black/20 p-4 rounded-xl">
        <div className="w-full flex items-center justify-between">
          <h2 className="tracking-tighter text-2xl">Your Shopping Cart</h2>
          <p className="tracking-tight">( {totalQuantity} items )</p>
        </div>
        <ul className="w-full flex flex-col gap-2">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <p className="text-end text-xl tracking-tight">
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>
    </section>
  );
}

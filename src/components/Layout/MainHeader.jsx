import { useDispatch, useSelector } from "react-redux";
import CartButton from "../Cart/CartButton";
import { uiActions } from "../../store/ui";

export default function MainHeader() {
  const showCart = useSelector((state) => state.ui.showCart);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(uiActions.toggleCart());
  }

  return (
    <header className="w-full p-10 flex items-center justify-between border-b border-black/20">
      <h1 className="tracking-tighter text-2xl">ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton handleClick={handleClick} quantity={totalQuantity}>
              {showCart ? "Hide" : "Show"} Cart
            </CartButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function CartButton({ handleClick, quantity, children }) {
  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center gap-2 cursor-pointer p-2 px-4 bg-black/20 rounded-lg"
    >
      <span className="tracking-tighter">{children}</span>
      <span className="rounded-full text-sm size-7 bg-black text-white flex items-center justify-center">
        {quantity}
      </span>
    </button>
  );
}

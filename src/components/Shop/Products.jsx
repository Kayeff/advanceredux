import ProductItem from "./ProductItem";

const dummy = [
  {
    id: "p1",
    title: "Book",
    price: 3,
    description: "This product is first and is amazing.",
  },
  {
    id: "p2",
    title: "Pen",
    price: 1,
    description: "This product is second and is amazing.",
  },
  {
    id: "p3",
    title: "Colour Palette",
    price: 4,
    description: "This product is third and is amazing.",
  },
  {
    id: "p4",
    title: "Writing Desk",
    price: 20,
    description: "This product is fourth and is amazing.",
  },
];

export default function Products() {
  return (
    <section className="w-full flex items-center justify-center flex-col gap-4">
      <h2 className="tracking-tighter text-lg">Buy your favorite products</h2>
      <ul className="w-1/2 grid grid-cols-2 gap-2">
        {dummy.map((prod) => (
          <ProductItem key={prod.id} prod={prod} />
        ))}
      </ul>
    </section>
  );
}

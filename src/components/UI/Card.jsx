export default function Card({ children }) {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full border border-black/20 p-5 rounded-lg flex flex-col gap-2">
        {children}
      </div>
    </section>
  );
}

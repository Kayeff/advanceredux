import MainHeader from "./MainHeader";

export default function Layout({ children }) {
  return (
    <div className="w-full flex flex-col gap-5">
      <MainHeader />
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  );
}

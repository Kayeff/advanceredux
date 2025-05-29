export default function Layout() {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}

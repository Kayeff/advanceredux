import { twMerge } from "tailwind-merge";

export default function Notification({ notification }) {
  const { status, message, title } = notification;

  return (
    <section
      className={twMerge(
        "absolute flex items-center justify-between text-white p-1.5 px-10 top-0 left-1/2 -translate-x-1/2 w-full",
        status === "pending" && "bg-indigo-500",
        status === "success" && "bg-black",
        status === "error" && "bg-red-500"
      )}
    >
      <h2 className="text-sm tracking-tight">{title}</h2>
      <p className="text-xs">{message}</p>
    </section>
  );
}

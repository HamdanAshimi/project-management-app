export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-blue-500 text-white hover:bg-blue-400"
      {...props}
    >
      {children}
    </button>
  );
}

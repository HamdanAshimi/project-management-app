export default function Button({ children, ...props }) {
  return (
    <button
      className="rounded-md bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-400 sm:px-4 sm:text-base"
      {...props}
    >
      {children}
    </button>
  );
}

export default function Input({ label, textarea, ...props }) {
  const classes =
    "w-full rounded-sm border-b-2 border-slate-700 bg-slate-800 px-2 py-2 text-sm text-white focus:border-blue-500 focus:outline-none sm:text-base";

  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="text-xs font-bold uppercase text-slate-400 sm:text-sm">
        {label}
      </label>

      {textarea ? (
        <textarea className={`${classes} min-h-24 resize-y`} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}

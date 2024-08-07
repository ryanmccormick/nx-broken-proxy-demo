export function Button(props: { onClick: () => void; label: string; disabled: boolean }) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {props.label}
    </button>
  );
}

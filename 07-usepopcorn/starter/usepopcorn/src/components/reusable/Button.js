export function Button({ onClick, children, className }) {
  return (
    <button className={className ? className : `btn-toggle`} onClick={onClick}>
      {children}
    </button>
  );
}

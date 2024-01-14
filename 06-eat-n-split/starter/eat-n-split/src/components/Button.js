export function Button({ children, onClick, btnType }) {
  return (
    <button type={btnType} className="button" onClick={onClick}>
      {children}
    </button>
  );
}

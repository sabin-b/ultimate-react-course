export function Footer({ items }) {
  if (!items.length)
    return (
      <footer>
        <em>Start adding some items on your packing list 🚀</em>
        <p className="copyright">
          ©️ Copyright
          <span>{new Date().getFullYear()} - Travel Checklist</span>|
          <span className="highlight">designed by Sabin</span>
        </p>
      </footer>
    );
  let itemsLength = items.length;
  let packedLength = items.filter((item) => item.isPacked === true).length;
  let totalPercentage = packedLength
    ? Math.round((packedLength / itemsLength) * 100)
    : 0;
  if (totalPercentage !== 100) {
    return (
      <footer>
        <em>
          💼 You have {itemsLength} items on your List , and already you packed
          <span style={{ marginLeft: "10px" }}>{` ${packedLength}`}</span> (
          {` ${totalPercentage} % ) `}
        </em>
        <p className="copyright">
          ©️ Copyright
          <span>{new Date().getFullYear()} - Travel Checklist</span>|
          <span className="highlight">designed by Sabin</span>
        </p>
      </footer>
    );
  } else {
    return (
      <footer>
        <em>You Packed all the items ,Ready to go ✈️</em>
        <p className="copyright">
          ©️ Copyright
          <span>{new Date().getFullYear()} - Travel Checklist</span>|
          <span className="highlight">designed by Sabin</span>
        </p>
      </footer>
    );
  }
}

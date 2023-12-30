export function PartnerTip({ partnerTip, setPartnerTip }) {
  return (
    <div className="mt-4">
      <span>How much is your tip amount?</span>
      <select
        value={partnerTip}
        onChange={(e) => setPartnerTip(Number(e.target.value))}
        className="border-2 border-solid border-black ml-6 p-2"
      >
        <option value={0}>it was not good 0 %</option>
        <option value={5}>it was ok 5 %</option>
        <option value={10}>it was good 10 %</option>
        <option value={20}>it was amazing 20 %</option>
      </select>
    </div>
  );
}

export function FinalBill({ billAmount, totaltips, stateReset }) {
  if (billAmount > 0) {
    return (
      <div className="mt-4">
        <p className="font-bold text-lg">
          {`The bill amount is $${billAmount} , and tip amount is $${totaltips}`}
        </p>
        <button
          onClick={stateReset}
          className="py-2 px-8 transition ease-in rounded bg-indigo-600 text-white mt-5  hover:bg-black "
        >
          Reset
        </button>
      </div>
    );
  }
}

export function UserInput({ userInput, setUserInput }) {
  return (
    <div className="mt-8">
      <span>How much was the bill</span>
      <input
        className="border-2 border-solid border-black ml-6 p-2"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(Number(e.target.value))}
      />

      {/* <select
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="border-2 border-solid border-black ml-6 p-2"
      >
        <option value={0}>it was not good 0 %</option>
        <option value={5}>it was ok 5 %</option>
        <option value={10}>it was good 10 %</option>
        <option value={20}>it was amazing 20 %</option>
      </select> */}
    </div>
  );
}

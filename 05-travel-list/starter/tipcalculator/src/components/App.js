import { useState } from "react";
import { UserInput } from "./InputEl";
import { MYTip } from "./Tip";
import { PartnerTip } from "./Tip2";
import { FinalBill } from "./FinalBill";

function App() {
  let [userInput, setUserInput] = useState(0);
  let [mytip, setMytip] = useState(0);
  let [partnerTip, setPartnerTip] = useState(0);

  // * tip calculation
  let totalTipCalc = ((mytip + partnerTip) / 100) * userInput;

  function handleAllstatesReset() {
    setUserInput(0);
    setMytip(0);
    setPartnerTip(0);
  }

  return (
    <div className="ml-8">
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      <MYTip myTip={mytip} onSetTip={setMytip} />
      <PartnerTip partnerTip={partnerTip} setPartnerTip={setPartnerTip} />
      <FinalBill
        billAmount={userInput}
        totaltips={totalTipCalc}
        stateReset={handleAllstatesReset}
      />
    </div>
  );
}

export default App;

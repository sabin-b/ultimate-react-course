import { Accordian } from "./accordian";
import { faqs } from "./sample_data";

function App() {
  return (
    <div className="App">
      <Accordian data={faqs} />
    </div>
  );
}

export default App;

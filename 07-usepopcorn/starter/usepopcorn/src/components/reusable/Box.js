import { useState } from "react";
import { Button } from "../reusable/Button";
export function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <Button onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </Button>
      {isOpen && children}
    </div>
  );
}

// element prop example
// export function Boxex({ element }) {
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <div className="box">
//       <Button onClick={() => setIsOpen((open) => !open)}>
//         {isOpen ? "–" : "+"}
//       </Button>
//       {isOpen && element}
//     </div>
//   );
// }

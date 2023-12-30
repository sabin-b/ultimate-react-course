import { useState } from "react";

export default function App() {
  return <FlashCards />;
}
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  let [selectedId, setSelectId] = useState("");
  return (
    <div className="flashcards">
      {questions.map((card) => (
        <Card
          card={card}
          selectedId={selectedId}
          setSelectId={setSelectId}
          key={card.id}
        />
      ))}
    </div>
  );
}

function Card({ card, selectedId, setSelectId }) {
  function handleClick(id) {
    setSelectId(selectedId !== id ? id : null);
  }
  return (
    <div
      onClick={() => handleClick(card.id)}
      className={selectedId === card.id ? "selected" : ""}
    >
      <p>{selectedId === card.id ? card.answer : card.question}</p>
    </div>
  );
}

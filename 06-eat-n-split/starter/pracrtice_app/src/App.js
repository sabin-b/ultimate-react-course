import { useState } from "react";

let demo = [
  { id: 1, name: "cat", description: "i love  cats 🐈‍⬛" },
  { id: 2, name: "dog", description: "i love  dogs 🐕" },
  { id: 3, name: "bird", description: "i love  birds 🕊️" },
];

export default function App() {
  let [selectedPet, setSelectedPet] = useState(null);

  function handleSelectedPet(selectpet) {
    setSelectedPet((pet) => (pet?.id === selectpet.id ? null : selectpet));
  }

  return (
    <div className="w-full grid gap-12 items-center grid-cols-2 h-lvh p-32">
      <TabMenu onSelectedPet={handleSelectedPet} />
      {selectedPet && <TabText petDesc={selectedPet} />}
    </div>
  );
}

function TabMenu({ onSelectedPet }) {
  return (
    <div className="bg-orange-100  p-8 rounded-md flex flex-col gap-6">
      {demo &&
        demo.map((pet) => (
          <TabItem pet={pet} key={pet.id} onSelectedPet={onSelectedPet} />
        ))}
    </div>
  );
}

function TabItem({ pet, onSelectedPet }) {
  return (
    <div className="p-4 bg-white rounded-md" onClick={() => onSelectedPet(pet)}>
      <h4 className="text-center capitalize text-2xl">{pet.name}</h4>
    </div>
  );
}

function TabText({ petDesc }) {
  return (
    <div className="">
      <p className="text-4xl">{petDesc.description}</p>
    </div>
  );
}

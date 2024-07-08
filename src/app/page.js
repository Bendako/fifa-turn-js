import Card from "./components/Card";
import { playersArray } from "./Players";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center">
      {playersArray.map((player, index) => (
          <Card key={index} name={player} />
        ))}
      </div>
    </div>
  );
}

// pages/index.js or app/page.js (depending on your Next.js version)
import Card from "./components/Card";
import PlayerSelector from "./components/PlayerSelector";
import Side from "./components/Side";
import { playersArray } from "./Players";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <PlayerSelector />
      <div className="text-black">
        <Side />
      </div>
      <div className="flex flex-wrap justify-center">
        {playersArray.map((player, index) => (
          <Card key={index} name={player} />
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";
import "./App.css";
import MomentCard from "./MomentCard";
import { Moment } from "./Moment";
import Navbar from "./Navbar";

function App() {
  const [moments] = useState<Moment[]>([
    {
      title: "Trip to NYC",
      headline: "My trip to NY with my wife",
      description:
        "It was an amazing trip! Many places to take pictures and visit!",
      isFavorite: false,
    },
    {
      title: "Trip to Europe",
      headline: "My trip to Europe with my wife in 2014",
      description:
        "This trip was when we were waiting for Lucas. Many pictures and great moments.",
      isFavorite: false,
    },
  ]);

  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <h1 className="text-6xl font-bold tracking-tight pb-4">All moments</h1>
        <div className="space-y-0.5">
          <p className="text-muted-foreground">
          Here you can find all important moments in my life
          </p>
        </div>
        {moments.length === 0 && (
          <p>Currently, there are no moments to display</p>
        )}
        {moments.map((moment) => (
          <MomentCard moment={moment}></MomentCard>
        ))}
      </main>
    </>
  );
}

export default App;

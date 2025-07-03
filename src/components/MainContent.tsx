"use client";

import DestinationCard from "./DestinationCard";
import DestinationList from "./DestinationList";
import ExploreCard from "./ExploreCard";
const destinations = [
  {
    id: 1,
    title: "Mount climbing",
    subtitle: "Green Mountain",
    rating: 4.8,
    image: "/Green Mountain.png",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    id: 2,
    title: "Night camping",
    subtitle: "Lightning lake",
    rating: 4.8,
    image: "/night-campaign.png",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 3,
    title: "Mount climbing",
    subtitle: "Green Mountain",
    rating: 4.8,
    image: "/Green Mountain.png",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const bestDestinations = [
  {
    id: 1,
    name: "Green wood forest",
    location: "Telangana",
    rating: 4.8,
    reviews: 120,
    price: 999,
    image: "/green-wood-forest.png",
  },
  {
    id: 2,
    name: "Green forest Camp",
    location: "Channai",
    rating: 4.8,
    reviews: 89,
    price: 999,
    image: "/green-forest-camp.png",
  },
  {
    id: 3,
    name: "Desert Festival",
    location: "Gujarat",
    rating: 4.7,
    reviews: 156,
    price: 999,
    image: "/desert-festival.png",
  },
];

export default function MainContent() {
  return (
    <div className="flex-1 px-2 md:px-4 py-4">
      {/* Destination Cards */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 h-auto md:h-80 overflow-x-visible">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2">
          <DestinationList destinations={bestDestinations} />
        </div>
        <div className="md:col-span-1">
          <ExploreCard title="Let's Explore the beauty" />
        </div>
      </div>
    </div>
  );
}
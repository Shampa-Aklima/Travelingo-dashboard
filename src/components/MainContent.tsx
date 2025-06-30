"use client"

import DestinationCard from "./DestinationCard"
import DestinationList from "./DestinationList"
import ExploreCard from "./ExploreCard"

const destinations = [
  {
    id: 1,
    title: "Mountaineering",
    category: "Green Mountain",
    image: "/Mount climbing.png",
    gradient: "from-green-400 to-emerald-500",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Night camping",
    category: "Lightning lake",
    image: "/night-campaign.png",
    gradient: "from-blue-500 to-purple-600",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Mount climbing",
    category: "Green Mountain",
    image: "/Mount climbing.png",
    gradient: "from-emerald-500 to-teal-600",
    rating: 4.8,
  }
]

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
    rating: 4.8,
    reviews: 156,
    price: 999,
    image: "/desert-festival.png",
  },
]

export default function MainContent() {
  return (
    <div className="flex-1 p-4 lg:p-6 overflow-y-auto scrollbar-hide">
      {/* Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8 max-w-full">
        {destinations.map((destination) => (
          <div key={destination.id} className="flex justify-center">
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Best Destinations - Takes 2 columns */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <DestinationList destinations={bestDestinations} />
        </div>

        {/* Explore Card - Takes 1 column */}
        <div className="lg:col-span-1 order-1 lg:order-2">
          <ExploreCard
            imageSrc="/best-dest-card.png"
            title="Let's Explore the beauty"
            location="Various Locations"
            rating={4.9}
            price={1299}
          />
        </div>
      </div>
    </div>
  )
}
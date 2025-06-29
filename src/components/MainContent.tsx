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
    category: " Lightning lake",
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
    name: "Mount climbing",
    location: "Bandung",
    rating: 4.9,
    reviews: 120,
    price: 999,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Green forest Camp",
    location: "Bogor",
    rating: 4.8,
    reviews: 89,
    price: 999,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Desert Festival",
    location: "Sahara",
    rating: 4.7,
    reviews: 156,
    price: 999,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function MainContent() {
  return (
    <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
      {/* Destination Cards */}
      <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8 max-w-full">
        {destinations.map((destination) => (
          <div key={destination.id} className="flex justify-center">
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Best Destinations - Takes 2 columns */}
        <div className="lg:col-span-2">
          <DestinationList destinations={bestDestinations} />
        </div>

        {/* Explore Card - Takes 1 column */}
        <div className="lg:col-span-1">
          <ExploreCard />
        </div>
      </div>
    </div>
  )
}
